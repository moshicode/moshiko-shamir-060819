import React from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Favorites from './components/Favorites'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/favorites' component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
