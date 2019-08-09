const intialState = [
    {
        id: 1,
        name: 'Tel Aviv',
        currentTemp: 32
    },
    {
        id: 2,
        name: 'Jerusalem',
        currentTemp: 24
    }
]


const favoritesReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return [
                ...state,
                action.payload
            ]
        case 'REMOVE_FAVORITE':
            return state.filter((item) => item.id !== action.payload)
        default:
            return state
    }
}

export default favoritesReducer