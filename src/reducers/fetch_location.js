const initialState = []

const locationReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_LOCATION':
            return {
                ...state,
                location: action.payload
            }
        case 'GET_FORECASTS':
            return {
                ...state,
                forecasts: action.payload
            }
        case 'GET_CURRENT':
            return {
                ...state,
                current: action.payload
            }
        default:
            return state
    }
}

export default locationReducer