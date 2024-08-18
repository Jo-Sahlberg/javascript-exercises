const findTheOldest = function(arr) {

    const currentYear = new Date().getFullYear();

    return arr.reduce((oldest, person) => {
        if(!person.yearOfDeath) {
            person.yearOfDeath = currentYear;
        }

        const age = person.yearOfDeath - person.yearOfBirth;

        if(!oldest || age > oldest.yearOfDeath - oldest.yearOfBirth) {
            return person;
        }

        return oldest;
    }, null);

};



// Do not edit below this line
module.exports = findTheOldest;
