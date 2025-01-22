const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a)|| !Number.isInteger(b)) {
        return "ERROR";
    }
    let start;
    let end;
    let sum = 0;
    a < b ? (start = a, end = b) : (start = b, end = a);
    for (i = start; i <= end; i++) sum+= i;
    return sum;
;
};

// Do not edit below this line
module.exports = sumAll;
