/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function getArreyInitials (array) {
    let arrayInitials = []
    for (var i = 0; i < array.length; i += 1) {
        arrayInitials.push((array[i].charAt(0)));
    }
    return arrayInitials
}
// Invoca la funzione qui e stampa il risultato in console

console.log(getArreyInitials(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]