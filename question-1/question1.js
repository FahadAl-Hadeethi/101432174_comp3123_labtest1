async function lowerCaseWords(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    } else {
        const filteredWords = arr.filter(item => typeof item === 'string')
                                 .map(word => word.toLowerCase());
        return filteredWords;
    }
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));