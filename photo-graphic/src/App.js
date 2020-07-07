import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Photography from './components/pages/photography';
import Graphics from './components/pages/graphic-design';
// import Contact from './components/pages/contact';
import Nav from './components/nav/nav';
// import Nav from './nav';
// import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <Router>
      <Nav />
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path="/photography" exact component={Photography}></Route>
      <Route path="/graphic-design" exact component={Graphics}></Route>
    </Router>
  );
}



// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <nav className="navbar">
//           <ul className="navnames">
//             <li><Link to={'/'} className="navlink">Home</Link></li>
//             <li><Link to={'/contact'} className="navlink">Contact</Link></li>
//             <li><Link to={'/about'} className="navlink">About</Link></li>
//           </ul>
//         </nav>
//         <Switch>
//           <Route exact path='/' component={Home} />
//           <Route exact path='/contact' component={Contact} />
//           <Route exact path='/About' component={About} />
//         </Switch>
//         <h2>Welcome to React Router Tutorial</h2>
//       </Router>
//     );
//   }
// }

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
