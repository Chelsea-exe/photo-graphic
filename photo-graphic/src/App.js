import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
// import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav className="navbar">
          <ul className="navnames">
            <li><Link to={'/'} className="navlink">Home</Link></li>
            <li><Link to={'/contact'} className="navlink">Contact</Link></li>
            <li><Link to={'/about'} className="navlink">About</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/About' component={About} />
        </Switch>
        <h2>Welcome to React Router Tutorial</h2>
      </div>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
