// 1. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.

const somma50 = (a, b) => {
  if (a === 4 || b === 50|| a + b === 50) {
    return true
  } else return false
}
console.log(somma50(25, 25))

// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

function rimuoviCarattere(stringa, posizione) {
  if (posizione < 0 || posizione >= stringa.length) {
    // Se la posizione è fuori dai limiti della stringa, restituisci la stringa originale.
    return stringa;
  } else {
    // Utilizza il metodo `slice` per rimuovere il carattere in posizione specifica.
    return stringa.slice(0, posizione) + stringa.slice(posizione + 1);
  }
}

// Esempio 
const stringaOriginale = "Hello, World!";
const nuovaStringa = rimuoviCarattere(stringaOriginale, 5); // Rimuove la virgola
console.log(nuovaStringa); // Output: "Hello World!"

// In questa funzione, verifico se la posizione specificata è all'interno dei limiti della stringa.
// Se la posizione è valida (cioè maggiore o uguale a zero e minore della lunghezza della stringa),
// utilizziamo il metodo `slice` per rimuovere il carattere in quella posizione dalla stringa originale.
// Successivamente, restituiamo la stringa modificata.
// Se la posizione è fuori dai limiti della stringa (negativa o maggiore o uguale alla lunghezza della stringa),
// semplicemente restituiamo la stringa originale senza apportare modifiche.

// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

const controllaNumeri = (a, b) => {
  if (
    (a >= 40 && a <= 60 && b >= 40 && b <= 60) ||
    (a >= 70 && a <= 100 && b >= 70 && b <= 100)
  ) {
    return true
  } else return false
}

console.log(controllaNumeri(40,70))

// 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.

function controllaCitta(nomeCitta) {
  if (nomeCitta.startsWith("Los") || nomeCitta.startsWith("New")) {
    return nomeCitta;
  } else {
    return false;
  }
}



console.log(controllaCitta("New York"));      // New York

// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
// L’array deve essere passato come parametro.

function sommaArray(array) {
  let somma = 0;

  for (let i = 0; i < array.length; i++) {
    somma += array[i];
  }

  return somma;
}

//utilizzo:
const arrayNumeri = [1, 2, 3, 4, 5];
const risultato = sommaArray(arrayNumeri);
console.log(risultato); // Output: 15


// 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.

function controllaArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1 || array[i] === 3) {
      return false;
    }
  }
  return true;
}


const array1 = [2, 4, 5, 6];
console.log(controllaArray(array1)); // true (non contiene 1 o 3)




// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° ⇒ ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
// Angolo retto: 90° ⇒ ritorna “retto”
// Angolo piatto: 180° ⇒ ritorna “piatto”

const angoli = (deg) => {
  if (deg < 90) return "acuto";
  if (deg === 90) return "retto";
  if (deg > 90 && deg < 180) return "ottuso";
  if (deg === 180) return "piatto";
  
  return "gradi non validi"; // Gestione dei gradi non validi
}

//utilizzo:
console.log(angoli(45));  // "acuto"



// 8. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

//da vedere....


