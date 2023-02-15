/* Given an array of strings, return only the words that begin with the letter "t".

Use array, strings, .charAt, .push, if statement

*/

function onlyTs(array) {
    var tWords = []
    for (i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === "t" || array[i].charAt(0) === "T") {
            tWords.push(array[i])
        }
    }
    return tWords
}
var words = ["Tyranosaurus", "Pterodactyl", "timmy", "Stegosaurus", "brontosaurus", "triceratops", "Tooth"]

console.log(onlyTs(words))
