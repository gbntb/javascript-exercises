const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();

    array.sort((a, b) => {
        ageA = ("yearOfDeath" in a) ? a.yearOfDeath - a.yearOfBirth : currentYear - a.yearOfBirth;
        ageB = ("yearOfDeath" in b) ? b.yearOfDeath - b.yearOfBirth : currentYear - b.yearOfBirth;
        return ageB - ageA;
    });

    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
