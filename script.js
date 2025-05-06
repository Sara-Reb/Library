const myLibrary = [];

function Book(author, title, pages, read) {
  // constructor
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

function displayBook() {
  // loops through the library and display each book on the page
}
