const removeFromArray = function(arr, ...items) {
    outputArr = [];
    for (const a of arr ) {
        if(items.includes(a) == false) outputArr.push(a);
    }
    return outputArr;
};

// Do not edit below this line
module.exports = removeFromArray;
