import React, { useEffect } from 'react';
import './styles/style.css'
import Home from './components/Home'
import Header from './components/Header'
import Favorites from './components/Favorites'
import { Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getLocation } from './actions/weatherActions'

function App() {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.isDark)

  useEffect(() => {
    dispatch(getLocation('Tel aviv'));
  }, []);

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
