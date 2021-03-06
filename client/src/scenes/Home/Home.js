import React, { Component } from 'react';
import './styles.css';
import ErrorBoundary from './../Home/components/ErrorBoundary';
import Footer from './components/Footer';
import MobileMenu from './components/Header/MobileMenu';
import MainHeader from './components/Header/MainHeader';
import { BrowserRouter as Router } from 'react-router-dom';


//import axios from "axios";
//import { Route } from 'react-router-dom'
//import AddAgency from './scenes/Home/components/AddAgency'
  


class Home extends Component {

  constructor(props) {
       super(props);

       this.state = {
        agencies: [],
        filterResults: [],
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
        <Router>
          <div>
        <MainHeader 
        agencies={this.state.agencies}
        filterResults={this.state.filterResults} /> 
        <MobileMenu 
        agencies={this.state.agencies}
        filterResults={this.state.filterResults} /> 
          
        <Footer />
        </div>
        </Router>
        
      </ErrorBoundary>

      );
  }
}

export default Home;
