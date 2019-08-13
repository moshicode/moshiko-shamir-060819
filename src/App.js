import React, { useEffect } from 'react';
import './styles/style.css'
import Header from './components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { getLocation } from './actions/weatherActions'
import Routes from './routes'

function App() {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.isDark)

  useEffect(() => {
    dispatch(getLocation('Tel aviv'));
  })

  return (
    <div className={isDarkMode ? 'app dark' : 'app'}>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
