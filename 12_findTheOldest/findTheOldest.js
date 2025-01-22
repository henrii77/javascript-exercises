const findTheOldest = function(people) {
    sortedByAge = people.sort((a, b) => {
        const aAge = 'yearOfDeath' in a ? 
            a.yearOfDeath - a.yearOfBirth :
            (new Date()).getFullYear - a.yearOfBirth;
        
        const bAge = 'yearOfDeath' in b ? 
            b.yearOfDeath - b.yearOfBirth :
            (new Date()).getFullYear - b.yearOfBirth;
        
        return aAge > bAge ? 1 : -1;
    })
    return sortedByAge.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
