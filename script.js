const books = document.querySelector(".books");

const myLibrary = [];

function Book(author, title, pages, read) {
  // constructor
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(author, title, pages, read) {
  // take params, create a book then store it in the array
  const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
}

function displayBook(myLibrary) {
  // loops through the library and display each book on the page
  myLibrary.forEach(() => {
    /* Create title div */
    const titleDiv = document.createElement("div", { class: "title" });
    const title = document.createElement("h2");
    title.innerText = this.title;
    titleDiv.appendChild(title);

    /* Create author div */
    const authorDiv = document.createElement("div", { class: "author" });
    authorDiv.innerHTML = "<p>by</p>";
    const author = document.createElement("h3");
    author.innerText = this.author;
    authorDiv.appendChild(author);

    /* Create pages div */
    const pagesDiv = document.createElement("div", { class: "pages" });
    pagesDiv.innerHTML = "<span>📖</span>";
    const pages = document.createElement("p");
    pages.innerText = this.pages + " pages";
    pagesDiv.appendChild(pages);

    /* Create status div */
    const statusDiv = document.createElement("div", { class: "status" });
    const status = document.createElement("input", {
      type: "checkbox",
      id: "read",
    });
    const statusLabel = document.createElement("label", { for: "read" });
    statusLabel.innerText = "Read";
    status.setAttribute("checked", `${this.read}`);

    /* Delete button */
    const deleteDiv = document.createElement("div", { class: "delete" });
    deleteDiv.innerHTML = <button class="delete icon-button">🗑️</button>;

    /* Create book card */
    const card = document.createElement("div", { class: "card" });
    card.appendChild(titleDiv);
    card.appendChild(authorDiv);
    card.appendChild(pagesDiv);
    card.appendChild(statusDiv);
    card.appendChild(deleteDiv);

    /* Add book card to books */
    books.appendChild(card);
  }, this);
}
