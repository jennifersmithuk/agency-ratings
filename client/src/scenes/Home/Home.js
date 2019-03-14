import React, { Component } from 'react';
import logo from './../../images/Stars_small.jpg';
import './styles.scss';
import ErrorBoundary from './../Home/components/ErrorBoundary';
import RatingsResults from './../Home/components/RatingsResults';
import RatingsForm from './components/RatingsForm/RatingsForm';
//import agencies from './../../agencies.json';
import escapeRegExp from 'escape-string-regexp';
import SignInButton from './../Home/components/SignInButton';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './../Home/components/theme';
//import axios from "axios";
//import { Route } from 'react-router-dom'
//import AddAgency from './scenes/Home/components/AddAgency'

/*
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)
*/


class Home extends Component {

  constructor(props) {
       super(props);

       this.state = {
        agencies: [],
        id: 0,
        intervalIsSet: false,
        idToUpdate: null,
        objectToUpdate: null,
        AgencyName: null,
        AgencyLocationTown: null,
        AgencyLocationRegion: null,
        AgencyEmail: null,
        RatingAverage: null,
        RatingSatisfaction: null,
        RatingService: null,
        RatingPayOnTime: null,
        RatingNUBSLI: null,
        RatingWorkAgain: null,
        RatingRecommend: null,
        filterResults: [],
        filterQuery: '',
           }
       };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has 
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 2000);
      this.setState({ 
        intervalIsSet: interval
      });
    }
  }

  // never let a process live forever 
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ 
        intervalIsSet: null
      });
    }
}


  //When query starts, filter results
  updateFilterResults(query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      this.setState({
        filterResults: this.state.agencies.filter((agencies) => match.test(agencies.AgencyName))
      })
    }
      

/*Add Agency
      createAgency(agency) {
        AgenciesAPI.create(agency).then(agency => {
          this.setState(state => ({
            agencies: state.agencies.concat([ agencies ])
          }))
        })
      }
      */


// just a note, here, in the front end, we use the id key of our data object 
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify 
  // data base entries

  // our first get method that uses our backend api to 
  // fetch data from our data base
  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData") 
      .then(data => data.json())
      .then((res) => {
        if (!res.success) this.setState({ error: res.error });
        else this.setState({ 
          agencies: res.data,
          filterResults: res.data
           });
      });
      console.log("got data!");
  };

  /*

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = message => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:3001/api/putData", {
      id: idToBeAdded,
      message: message
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("http://localhost:3001/api/updateData", {
      id: objIdToUpdate,
      update: { message: updateToApply }
    });
};
*/


  render() {
    return (

      <ErrorBoundary>
        <MuiThemeProvider theme={theme}>

      <div className="App flex-container">
        <header className="App-header flex-container">
          <img src={logo} className="App-logo" alt="Logo of 6 Green Stars with different ratings" />
          <h1 className="App-title">Welcome to Agency Ratings</h1>
          <h2>where interpreters rate agencies they like, and the ones they don't</h2>
          <SignInButton
            tabIndex={0}
            ></SignInButton>
        </header>
      <main>

        <div className="App-about">
          <h3 className="App-about-heading">About Agency Ratings</h3>
          <div className="App-about-info">
          <p>Most interpreters are freelance, working for a variety of agencies and direct clients.</p>
          <br />
          <p>There are a multitude of agencies. Relying on word of mouth isn't enough.</p>
          <br />
          <p>Transparency and clarity for all. Finally, a way to rate agencies in a safe way.</p>
        </div>
        </div>

        <section className="Ratings flex-container">

          <RatingsResults
            agencies={this.state.agencies}
            filterResults={this.state.filterResults}
            updateFilterResults={this.updateFilterResults.bind(this)}
            />

          <RatingsForm
            agencies={this.state.agencies}

            />

      </section>
      </main>

      <footer id="footer">
          <span className="Footer-text">Built by <a href="https://www.linkedin.com/in/jennifersmithuk">Jennifer Smith</a>
          &nbsp;&nbsp;&nbsp;&nbsp;Vector Art by <a rel="noopener noreferrer nofollow" target="_blank" href="https://www.vecteezy.com">Vecteezy.com</a></span>
      </footer>
    </div>
    </MuiThemeProvider>
    </ErrorBoundary>

      );
  }
}

export default Home;
