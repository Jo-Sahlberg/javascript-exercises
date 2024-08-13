const palindromes = function (str) {

    let newString = []; 

    for(char of str){
        if(char === " " || char === "." || char === "," || char === "!"){
        } else {
            newString.push(char.toLowerCase());
        }
    } 
    let revString = [...newString].reverse();

    if(newString.join('') === revString.join('')) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
