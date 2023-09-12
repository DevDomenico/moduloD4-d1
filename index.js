// 1. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.

const somma50 = (a, b) => {
  if (a === 4 || b === 50|| a + b === 50) {
    return true
  } else return false
}
console.log(somma50(25, 25))

// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

// da vedere....

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

// da vedere.....

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

//da vedere...

// 8. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

//da vedere....


