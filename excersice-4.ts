// Crea una función isBookRead que reciba una lista de libros y un titulo y devuelva si se ha leído o no dicho libro.
// Un libro es un objeto con title como string y isRead como booleano.
// En caso de no existir el libro devolver false

class Book {
  title: string;
  isRead: boolean;
}

// TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

function isBookRead(books: Book[], titleToSearch: string): boolean {
  let book: Book = books.find(book => book.title === titleToSearch);
  return book ? book.isRead : false;
}

// Ejemplo
const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true }
];

console.log(isBookRead(books, "Devastación"));// true
console.log(isBookRead(books, "Canción de hielo y fuego"));// false
console.log(isBookRead(books, "Los Pilares de la Tierra"));// false

// Opcional Uliza Typescript para añadir los tipos adecuados.