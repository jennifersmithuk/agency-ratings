import React, { Component } from 'react';
import logo from './../../images/Stars_small.jpg';
import './styles.scss';
import ErrorBoundary from './../Home/components/ErrorBoundary';
import RatingsResults from './../Home/components/RatingsResults';
import RatingsForm from './../Home/components/RatingsForm';
import agencies from './../../agencies.json';
import escapeRegExp from 'escape-string-regexp';
import SignInButton from './../Home/components/SignInButton';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './../Home/components/theme';
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
         filterResults: [],
         filterQuery: '',
           }
       };


  componentDidMount() {
      this.setState({
        agencies: agencies,
        filterResults: agencies
      })
    console.log(agencies);
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
          &nbsp;&nbsp;&nbsp;&nbsp;Vector Art by <a rel="nofollow" target="_blank" href="https://www.vecteezy.com">Vecteezy.com</a></span>
      </footer>
    </div>
    </MuiThemeProvider>
    </ErrorBoundary>

      );
  }
}

export default Home;
