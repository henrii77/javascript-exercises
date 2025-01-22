const repeatString = function(phrase, num) {
    if (num < 0) return 'ERROR';
    let finalPhrase = '';
    for (i=0; i < num; i++) {
        finalPhrase += phrase;
    }
    return finalPhrase;
};

// Do not edit below this line
module.exports = repeatString;
