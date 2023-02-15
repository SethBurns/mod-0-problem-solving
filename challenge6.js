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
