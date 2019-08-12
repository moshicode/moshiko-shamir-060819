
export const addFavorite = (id, name) => {
    return (dispatch, getState) => {
        const state = getState()
        dispatch({
            type: 'ADD_FAVORITE',
            payload: {
                id: id,
                name: name
            }
        })
    }
}

export const convertTempUnits = () => {
    return {
        type: 'CONVERT_TEMPERATURE_UNITS'
    }
}

export const toggleDarkMode = () => {
    return {
        type: 'SET_DARK_MODE'
    }
}

export const removeFavorite = id => {
    return {
        type: 'REMOVE_FAVORITE',
        payload: id
    }
}

// APIS
// 4gI1E7FpGxu7NOag9KZisGMhA1e54aoL
// DVaSHCZ2oK98ZriCAWD9hnT7V0jxRO9g
// Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS

// dWD7IznmsGfuKaKFufT5l9vOGUgNiiQG
// sJTf7TBlualDqAsfKaTUgVv67u3qxjeh
// ISveHERc8tUTm49Y9Kt4QmqNWFgqkp80
// 9oUg1Ge7VpIOYzZbin0yfApxj8ASG8dN
// srRLeAmTroxPinDG8Aus3Ikl6tLGJd94