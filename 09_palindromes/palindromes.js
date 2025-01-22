const palindromes = function (sentence) {
    let original = sentence.toLowerCase().split("").filter(char => {
        return /[a-zA-Z0-9]/.test(char);
    }).join("");
    let reversed = sentence.toLowerCase().split("").reverse().filter(char => {
        return /[a-zA-Z0-9]/.test(char);
    }).join("");
    return original === reversed
};

// Do not edit below this line
module.exports = palindromes;
