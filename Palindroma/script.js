// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedere all'utente di inserire una parola
let parolaUtente = prompt("Inserire una parola");

console.log(verificaPalindroma (parolaUtente));

// FUNZIONI

// creare una funzione per capire se la parola inserita è palindroma
function verificaPalindroma (parola) {

    // fare il reverse della parola
    let splitStringa = parola.split("");

    let reverseArray = splitStringa.reverse();

    let joinStringa = reverseArray.join("");

    // confrontare la parola e quella al contrario se sono uguali è palindroma

    if (parola === joinStringa) {
        
        return "Palindroma"
    } else {
        return "Non è Palindroma"
    }
        
} 



