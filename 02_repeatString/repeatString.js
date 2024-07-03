const repeatString = function(string, iteration) {
    
    let iteratedString = [];

    if(iteration < 0) {
        return "ERROR";
    }  else if(iteration){
        iteratedString = iteratedString + string;
        iteration--;
    }
    return iteratedString.toString();

};

// Do not edit below this line
module.exports = repeatString;
