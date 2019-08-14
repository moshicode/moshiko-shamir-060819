const initialState = {
    text: '',
    locations: []
}
const suggestionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SUGGESTIONS':
            return {
                ...state,
                locations: action.payload
            }
        case 'RESET_SUGGESTIONS':
            return {
                text: '',
                locations: []
            }
        case 'SET_TEXT':
            return { ...state, text: action.payload }
        default:
            return state
    }
}

export default suggestionsReducer