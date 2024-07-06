const reverseString = function(string) {
    let reversedString = string.split("");
    let reversedArray = reversedString.reverse();
    let reversedArrayToString = reversedArray.join("");

    return reversedArrayToString
};

console.log(reverseString("Hur mar du"));

// Do not edit below this line
module.exports = reverseString;
