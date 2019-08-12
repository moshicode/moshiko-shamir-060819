const locationReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_LOCATION':
            return action.payload
        case 'RESET_LOCATION':
            return state = []
        default:
            return state
    }
}

export default locationReducer