const removeFromArray = function(array, value, secondValue) {
    const newArray = [];

    for(const indexValue of array) {
        if(indexValue !== value && indexValue != secondValue) {
            newArray.push(indexValue);
        }
    };

    return newArray;
};






// Do not edit below this line
module.exports = removeFromArray;
