const locationReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_LOCATION':
            return action.payload
        case 'SET_LOCATION_BY_SUGGESTION':
            return action.payload
        default:
            return state
    }
}

export default locationReducer