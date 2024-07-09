const sumAll = function(a, b) {

    let sum = 0;

    if(b<a) {
        let c = a;
        a = b;
        b = c;
    } else if (b < 0 || a < 0 || typeof b !== "number" || typeof a !== "number") {
        return 'ERROR';
    }

    for(let i=b; i >= a; i-- ) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
