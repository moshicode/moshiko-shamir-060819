export const converter = (min, shouldconvert = false) => {
    if (shouldconvert) {
        return `${Math.floor(min * 9 / 5 + 32)}\xB0F`
    } else {
        return `${min}\xB0C`
    }
}