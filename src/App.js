import React, { Component } from 'react';
import logo from './Stars_small.jpg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import RatingsResults from './RatingsResults';
import RatingsForm from './RatingsForm';
import agencies from './agencies.json';
import escapeRegExp from 'escape-string-regexp';

/*
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)
*/



class App extends Component {

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



  render() {
    return (

      <ErrorBoundary>

      <div className="App flex-container">
        <header className="App-header flex-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Agency Ratings</h1>
          <h2 >where interpreters rate agencies they like, and the ones they don't</h2>
        </header>
      <main>

        <div className="App-intro">
          <p>Most interpreters are freelance, working for a variety of agencies and direct clients.</p>
          <p>There are a multitude of agencies. Relying on word of mouth isn't enough.</p>
          <p>Transparency, reputation, clarity: help us to help you. Rate them now.</p>
        </div>

        <section className="Ratings flex-container">

          <RatingsResults
            agencies={this.state.agencies}
            filterResults={this.state.filterResults}
            updateFilterResults={this.updateFilterResults.bind(this)}
            />

          <RatingsForm />

      </section>
      </main>

      <footer id="footer">
          <span className="Footer-text">Built by <a href="https://www.linkedin.com/in/jennifersmithuk">Jennifer Smith</a>
          &nbsp;&nbsp;&nbsp;&nbsp;Vector Art by <a rel="nofollow" target="_blank" href="https://www.vecteezy.com">Vecteezy.com</a></span>
      </footer>
    </div>

    </ErrorBoundary>

      );
  }
}

export default App;
