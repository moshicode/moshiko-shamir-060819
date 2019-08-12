const suggestionsReducer = (state = '', action) => {
    switch (action.type) {
        case 'GET_SUGGESTIONS':
            return action.payload
        case 'RESET_SUGGESTIONS':
            return state = []
        default:
            return state
    }
}

export default suggestionsReducer