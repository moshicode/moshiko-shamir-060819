import store from '../store'

export const converter = num => {
    const isCell = store.getState().isCellsius
    if (isCell) {
        return `${num}\xB0C`
    } else {
        return `${num * 9 / 5 + 32}\xB0F`
    }
}