// # TRACCIA

// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

// # SVOLGIMENTO

//     - chiedo all'utente di scegliere pari o dispari
//         - chiedo all'utente di scegliere un numero da 1 a 5
//             - faccio scegliere un numero al computer
//                 - uso una funzione che genera un numero random da 1 a 5
//                     - sommo il numero scelto dall'utente con quello del computer
//                         - se la somma è pari e l'utente ha scelto pari o se la somma è dispari e l'utente ha scelto dispari dichiaro "Hai vinto"
//                             - altrimenti dichiaro "Hai perso"


const winResult = document.getElementById('win-or-lose')

// l'utente sceglie pari o dispari
const userChoice = document.getElementById('user-choice')
const choice = userChoice.value
console.log(choice);

// registro il numero scelto dall'utente
const userNumberInput = document.getElementById('user-number')
const userNumber = userNumberInput.value
console.log(userNumber);

// genero un numero random per il computer
const computerNumber = getRandomNumber(1, 5)
console.log(computerNumber);

// sommo i due numeri
const result = userNumber + computerNumber
console.log(result);

if (result % 2 == 0 && choice == 'pari') {
    console.log('Hai vinto!');
    winResult.innerText = 'Hai vinto!'
} else if (result % 2 != 0 && choice == 'dispari') {
    console.log('Hai vinto!');
    winResult.innerText = 'Hai vinto!'
} else {
    console.log('Hai perso!');
    winResult.innerText = 'Hai perso!'
}






