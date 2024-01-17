// chiedo la parola all'utente
const userWord = prompt('scrivi una parola')
console.log(userWord);


// scrivo una funzione per creare una parola speculare
function reverseWord(word) {
    let reverseWord = ''
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i]
    }
    return reverseWord
}

// stampo la nuova parola
const resultWord = reverseWord(userWord)
console.log(resultWord);

const resultElement = document.getElementById('result')

// definisco se la parola è palindroma
if (userWord == resultWord) {
    console.log('La parola è palindroma');
    resultElement.innerText = 'La parola è palindroma'
} else {
    console.log('La parola non è palindroma');
    resultElement.innerText = 'La parola non è palindroma'
}
