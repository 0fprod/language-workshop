const myArrayOne = [0, 1, 2, 3];
const myArrayTwo = [4, 5, 6, 7];
const myArrayThree = [8, 9, 10];

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,devuelva la concatenación de ambos.
//  Uliza rest / spread operators.
const concat = (a, b) => [...a, ...b];

// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múlples arrays de entrada (más de 2)
const concatMultiple = (...multipleArrays) => multipleArrays.reduce((prev, current) => prev.concat(current));

console.log(concat(myArrayOne, myArrayTwo));
console.log(concatMultiple(myArrayOne, myArrayTwo, myArrayThree));