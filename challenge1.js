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


// Start with an array of travel destinations. 
// Print every travel destination in alphabetical order embedded in a sentence using string interpolation. 
// For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!"

// Use an Array, Strings, for iteration, .sort, and string interpolation to create strings with locations in alphabetical order.

// create Array of locations
// sort the array alphabetically with Array.sort
// create function to do the following:
// for statement to create loop
// if/else to create different sentences that make sense contectually
// log function

var locations = ["Finland", "Thailand", "Belize", "Chile"]
locations.sort()
function logLocations() {
    for (i = 0; i < locations.length; i++) {
        if (i === 0) {
            console.log(`First, I want to go to ${locations[i]}`)
        } else {
            console.log(`Then, I want to go to ${locations[i]}`)
        }
    }
}

logLocations()

// Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. 
// For example, if you were given "Turing is the best", return "Turing Is The Best" instead!

// Use a string with only lowercase letters, and a function which will: use .split to make an array of the words, 
// a for iteration, .charAt(0) and .toUppercase to capitalize first letter, then join that letter with the rest of the word with .slice(1)

// Write function for any given string
// Split the string into an array of words with .split(" ")
// Write a for statement to cycle through the created array
// Change each word to title case by using .charAt(0).toUpperCase() and add it to the rest of
// each word using .slice(1)
// Return the array joined into a sentence with a space using .join(" ")

function toTitleCase(string) {
    string = string.split(" ")
    for (i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1)
    }
    return string.join(" ")
}
console.log(toTitleCase("Turing is the best!"))

