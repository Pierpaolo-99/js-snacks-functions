/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

const start = new Date().getHours();
// Dichiara la funzione qui.

function greeting (name, time){
    for (let i = 0; i < 24; i++){
        if (i <= 13){
            let result = time + 'Buongiorno' + name
            return result
        }
        else if (i > 13 && i < 17){
            let result = time + 'Buon pomeriggio' + name
            return result
        }
        else{
            let result = time + 'Buonsera' + name
            return result
        }
    }
}

console.log(greeting(name, start));



// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.