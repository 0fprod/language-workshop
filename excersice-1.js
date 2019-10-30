const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento.
//Utiliza destructuring.
const head =([first]) => first;


// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. 
// Utiliza rest operator.
const tail =([last, ...rest]) => rest;

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el úlmo.
// Utiliza los métodos que ofrece Array.prototype.
const init =(array)=> array.slice(0, array.length - 2)

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el úlmo elemento.
const last =(array)=> array[array.length - 1];

console.log("Using this array " , myArray);
console.log(head(myArray));
console.log(tail(myArray));
console.log(init(myArray));
console.log(last(myArray));
console.log("The array remains the same " , myArray);

