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
function logLocations() {
    locations.sort()
    for (i = 0; i < locations.length; i++) {
        if (i === 0) {
            console.log(`First, I want to go to ${locations[i]}`)
        } else {
            console.log(`Then, I want to go to ${locations[i]}`)
        }
    }
}

logLocations()