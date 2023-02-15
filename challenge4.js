/* Start with an array of strings. Print only the words that include the letter combination "ing".

Create array of strings
create function using for iteration, if statement, .includes, and .push to create new array.

*/

function containsIng(array) {
    var output = []
    for (i = 0; i < array.length; i++) {
        if (array[i].includes("ing")) {
            output.push(array[i])

        }
    }
    return output
}

var words = ["Washington", "Bing", "Google", "Ingot"]

console.log(containsIng(words))