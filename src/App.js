import React, { Component } from 'react';
import logo from './Stars_small.jpg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import RatingsResults from './RatingsResults';
import RatingsForm from './RatingsForm';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)



class App extends Component {




  render() {
    return (

      <ErrorBoundary>

      <div className="App flex-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Agency Ratings</h1>
          <h2 className="App-subtitle">where interpreters rate agencies they like, and the ones they don't</h2>
        </header>
      <main>

        <div className="App-intro">
          <p>Most interpreters are freelance, working for a variety of agencies and direct clients.</p>
          <p>There are a multitude of agencies. Relying on word of mouth isn't enough.</p>
          <p>Transparency, reputation, clarity: help us to help you. Rate them now.</p>
        </div>

        <section className="Ratings">

          <RatingsResults />

          <RatingsForm />

      </section>
      </main>

      <footer id="footer">
          <p className="Footer-text">Built by <a href="https://www.linkedin.com/in/jennifersmithuk">Jennifer Smith</a></p>
          <p>Vector Art by <a rel="nofollow" target="_blank" href="https://www.vecteezy.com">Vecteezy.com</a></p>
      </footer>
    </div>

    </ErrorBoundary>

      );
  }
}

export default App;
