favrites: [] = [{ id: "134", name: "paris" }, { id: "13234", name: "TLV" }];

// On load favorite page rise Action called GetCurrentWeather data payload(favorites)
//Api call foreach fav in favorites and get the current wheater
//update state with current wheater


// componentdidmount 
// GO TO LOCALSTORAGE IF favorites.data.length > 0 
// SAVE IT TO THE SATATE OF REDUX

// DEFAULT FAVORITES = []

// ADD FAVORITE BUTTON => Action(addFavorite) => & SAVE ON LOCAL STORAGE
const Favorites = [
    { id: "134", name: "Paris" },
    { id: "13234", name: "TLV" },
    { id: "234", name: "madrid" }
]

// MOVING TO THE REDUCER

// => GO TO FAVORITES PAGE
// On load favorite page rise Action called GetCurrentWeather data payload(favorites)
//Api call foreach fav in favorites and get the current wheater
//update state with current wheater

// [ CITY NAME ]
// [ CURRENTWEATHER]

// [ CITY NAME ]
// [ CURRENTWEATHER]

// When the favorites page upload,
// useDispatch('GET_FAVORITE_CURRENT_WEATHER')
// CURRENTWEATHER NOT BE SAVED ON LOCALSTORAGE

state.favorites.forEach(fav => {

})

