import React, { Component } from 'react';
import './styles.css';
import ErrorBoundary from './../Home/components/ErrorBoundary';
import RatingsForm from './components/RatingsForm/RatingsForm';
import escapeRegExp from 'escape-string-regexp';
import { Container } from 'semantic-ui-react';
import Footer from './components/Footer';
import MobileMenu from './components/Header/MobileMenu';
import MainHeader from './components/Header/MainHeader';
import Intro from './components/Intro/Intro';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './components/About/About';

//import axios from "axios";
//import { Route } from 'react-router-dom'
//import AddAgency from './scenes/Home/components/AddAgency'
  


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

    const { fixed } = this.state

    return (

      <ErrorBoundary>
        <Router>
          <div>
        <MainHeader />
        <MobileMenu />
          
          <Switch>
            <Route exact path="/" render={() => (
               <Intro agencies={this.state.agencies}/>
            )}/>
            <Route path="/about" render={() => (
               <About />
            )}/>
            <Route exact path='/rate-an-agency' render={() => (
               <RatingsForm
               agencies={this.state.agencies}/>
            )}/>
            {/*<Route path="/ratings-results-full" component={RatingsResultsFull} /> */}
            {/*<Route component={Notfound} /> */}
          </Switch>
        
            <br />
            <Container 
            text >
         

          </Container>
        <br />
        <Footer />
        </div>
        </Router>
        
      </ErrorBoundary>

      );
  }
}

export default Home;
