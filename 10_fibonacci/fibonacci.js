const fibonacci = function(n) {

    n = Number(n);

    let a = 0, b = 1, next;

    if (n < 0) return 'OOPS';
    if (n === 0) return 0;
    if (n === 1) return 1;

    for(let i = 2; i <= n; i++){
        next = a + b;
        a = b; 
        b = next;
    } return b;
};

// Do not edit below this line
module.exports = fibonacci;
