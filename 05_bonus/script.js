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
        if (time <= 13){
            let result = 'Buongiorno' + ' ' + name
            return result
        }
        else if (time > 13 && i < 17){
            let result = 'Buon pomeriggio' + ' ' + name
            return result
        }
        else{
            let result = 'Buonsera' + ' ' + name
            return result
        }
    }
}

// Invoca la funzione qui e stampa il risultato in console

console.log(greeting(name, start));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.