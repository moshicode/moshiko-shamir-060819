export const loadState = () => {
    try {
        console.log('getting the localstorage')
        const serializedState = localStorage.getItem('favorites')
        if (serializedState === null) {
            console.log('none localstorage, its set new array')
            return []
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        console.log('its save to localstorage')
        const serializedState = JSON.stringify(state)
        localStorage.setItem('favorites', serializedState)
    } catch (err) {
        // IGNORE
    }
}
