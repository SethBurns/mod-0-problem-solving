// Given an array of strings, return only the strings that have exactly 4 characters.

// Use an Array, Strings, function, for statement, and if statement to log strings in array that have a length of 4 only.

// Array of names;
// Function with for and if statement
// Function not necessary but good practice
// iterate over Array
// use .length in if statement.
// log results to console
// call the function


var names = ["Olivia", "Emma", "Liam", "James", "Elijah", "Seth"]
function logNames() {
    for (i = 0; i < names.length; i++) {
        if (names[i].length === 4) {
         console.log(names[i])
        }
    }
}
logNames()





