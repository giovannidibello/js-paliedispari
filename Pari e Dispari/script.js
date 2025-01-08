// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedere all'utente di inserire pari o dispari
let pariODispariUtente = prompt("Inserire pari o dispari");
console.log("Scelta Utente:", pariODispariUtente);

// chiedere all'utente di inserire un numero da 1 a 5
let numeroUtente = parseInt(prompt("Inserire un numero da 1 a 5"));
console.log("Numero Utente:", numeroUtente);

// sommiamo i due numeri
let sommaNumeri = numeroUtente + numeroRandom1to5();
console.log("Somma dei due numeri:", sommaNumeri);

// dichiariamo chi ha vinto
if (pariODispariUtente === pariODispari(sommaNumeri)) {
    console.log("Hai vinto!!!");

} else {
    console.log("Il computer ha vinto!!!");
}


// FUNZIONI

// genera un numero random per il computer da 1 a 5 usando una funzione
function numeroRandom1to5() {

    let numeroRandom = Math.floor(Math.random() * 5) + 1;
    console.log("Numero computer:", numeroRandom);
    return numeroRandom;
}

// crea una funzione che verifica se la somma è pari o dispari
function pariODispari(somma) {
    if (somma % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}