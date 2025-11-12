const leapYears = function(year) {
    const yearIsMultipleOf4 = (year % 4 === 0);
    const yearIsMultipleOf100 = (year % 100 === 0);
    const yearIsMultipleOf400 = (year % 400 === 0);

    yearIsLeapYear = yearIsMultipleOf4 && (!yearIsMultipleOf100 || yearIsMultipleOf400);

    return yearIsLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
