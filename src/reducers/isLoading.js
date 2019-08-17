const isLoading = (state = true, action) => {
    switch (action.type) {
        case 'TOGGLE_LOADING':
            return false
        default:
            return state
    }
}
export default isLoading


// const isFetching = (state = 0, action) => {
//     switch (action.type) {
//         case 'FETCHING_PENDING':
//             return state + 1
//         case 'FETCHING_DONE':
//             return state - 1
//         default:
//             return state
//     }
// }

// export default isFetching