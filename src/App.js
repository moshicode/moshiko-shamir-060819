import React, { useEffect } from 'react';
import './styles/style.css'
import Header from './components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { getLocation, getLocationKeyByGEO } from './actions/weatherActions'
import Routes from './routes'

function App() {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.isDark)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => dispatch(getLocationKeyByGEO(position.coords.latitude, position.coords.longitude)),
      err => {
        console.log(err.message)
        dispatch(getLocation('Jerusalem'))
      }
    )
  }, [dispatch])

  return (
    <div className={isDarkMode ? 'app dark' : 'app'}>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
