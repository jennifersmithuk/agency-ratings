import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import ErrorBoundaryComponent from './ErrorBoundaryComponent'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to Agency Ratings</h1>
          <h2 className="App-subtitle">Where Interpreters rate agencies</h2>
        </header>
      <main>
        <p className="App-intro">

        </p>
      </main>

      <footer id="footer">
          <p className="Footer-text">Built by <a href="https://www.linkedin.com/in/jennifersmithuk">Jennifer Smith</a></p>
      </footer>
    </div>

      );
  }
}

export default App;
