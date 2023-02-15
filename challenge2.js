/* Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

Use array, strings, and .toLowerCase to acheive printing every word in lowercase.

*/




function arrayToLC(string) {
    var lcWords = []
    for (i = 0; i < string.length; i++) {
        lcWords.push(string[i].toLowerCase());
    }
    return lcWords;
}

var letters = ["ABc", "dEf", "ghiJ", "kLmnOp"];

console.log(arrayToLC(letters))