const palindromes = function (string) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

    let alphanumericStringArray = string.toLowerCase().split("").filter((char) => alphanumeric.includes(char));
    return alphanumericStringArray.join("") === alphanumericStringArray.reverse().join("");

};

// Do not edit below this line
module.exports = palindromes;
