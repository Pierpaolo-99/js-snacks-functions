/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function getVowels (str){
    let arrVowels = [];

    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'i'){
            arrVowels.push(str[i]);
        }
    }
    return arrVowels.length
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)