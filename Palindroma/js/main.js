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

const resultWord = reverseWord(userWord)
console.log(resultWord);
