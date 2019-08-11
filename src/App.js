import React from 'react';
import './App.css';
import './styles/style.css'
import Home from './components/Home'
import Header from './components/Header'
import Favorites from './components/Favorites'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

function App() {
  const isDarkMode = useSelector(state => state.isDark)
  return (
    <div className={isDarkMode ? 'app dark' : 'app'}>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/favorites' component={Favorites} />
      </Switch>
    </div>
  );
}

export default App;
