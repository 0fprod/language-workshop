// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
function clone(source) {
  return {...source}
}

const myObject = { prop: 1};
const myClonedObject = clone(myObject);
console.log(myObject, myClonedObject);

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source,
// y en caso de propiedades con el mismo nombre, source sobreescribe a target.
// Por ejemplo, dados estos 2 objetos:
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
// el resultado de mezclar a sobre b sería:
// {name: "Maria", age: 31, married: true, surname: "Ibañez", c
// TIP: Puedes usar la función “clone” del apartado A.

function merge(source, target) {
  return {...target, ...source};
}

console.log(merge(a,b));
