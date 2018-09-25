import React, { Component } from 'react';
import logo from './Stars_small.jpg';
import './App.css';
//import ErrorBoundaryComponent from './ErrorBoundaryComponent'



class App extends Component {
  render() {
    return (
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
        <div className="Ratings-results">
          <h3>The best and the worst...</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        <p>nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
        <p>reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
        <p>nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
        <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="Ratings-form">
        <h3>Rate the agency</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        <p>nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
        <p>reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
        <p>nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
        <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      </section>
      </main>

      <footer id="footer">
          <p className="Footer-text">Built by <a href="https://www.linkedin.com/in/jennifersmithuk">Jennifer Smith</a></p>
          <p>Vector Art by <a rel="nofollow" target="_blank" href="https://www.vecteezy.com">Vecteezy.com</a></p>
      </footer>
    </div>

      );
  }
}

export default App;
