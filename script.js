// Database
const book1 = new Book(
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  1997,
  223,
  );

const book2 = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  1937,
  310,
  );

// Script
let myLibrary = [];
addBooksToLibrary(book1, book2);

const bookList = document.querySelector(".bookList");
const showForm = document.querySelector(".showForm");
const form = document.querySelector("form");

createBookElements();

form.addEventListener('submit', event => {
  myLibrary = [];
  event.preventDefault();
  const formData = new FormData(form);
  const book = new Book(
    formData.get("title"),
    formData.get("author"),
    formData.get("release_year"),
    formData.get("pages"));
  addBooksToLibrary(book);
  createBookElements();
})

function createBookElements() {
  myLibrary.forEach(book => {
    const listItem = document.createElement('li');
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const release_year = document.createElement('p');
    const pages = document.createElement('p');
    const remove = document.createElement('button');
  
    title.textContent = book.title;
    author.textContent = book.author;
    release_year.textContent = book.release_year;
    pages.textContent = book.pages;
    remove.textContent = "Remove";
    remove.className = "remove";

    remove.addEventListener('click', () => {
      remove.parentElement.style.display = 'none';
    })
    
    listItem.append(title, author, release_year, pages, remove);
    listItem.className = "card";
    bookList.appendChild(listItem);
  })
}

function Book(title, author, release_year, pages, read) {
  this.title = title;
  this.author = author;
  this.release_year = release_year;
  this.pages = pages;
  this.read = read;
}

function addBooksToLibrary(...books) {
 [...books].forEach(book => myLibrary.push(book));
}