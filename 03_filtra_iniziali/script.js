/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function getArreyInitialsCommonLetter (array, letter) {
    let arrInitialsCommonLetter = []
    for (var i = 0; i < array.length; i += 1) {
        if (array[i].charAt(0) === letter){
            arrInitialsCommonLetter.push(array[i])
        }
    }
    return arrInitialsCommonLetter
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getArreyInitialsCommonLetter(names, 'A'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]