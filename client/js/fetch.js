const favBtn = document.getElementsByClassName('fav-btn');
const booksFlex = document.getElementById('books-flex');
const id = window.location.href.split('/book/')[0];

// Render Books
fetch('/books/view')
  .then((res) => res.json())
  .then((data) => getBooks(data));

const getBooks = (books) => {
  books.forEach((book) => {
    const singleBook = document.createElement('div');
    singleBook.classList.add('single-book');

    const bookContent = document.createElement('div');
    bookContent.classList.add('book-content');
    singleBook.appendChild(bookContent);

    const bookImage = document.createElement('div');
    bookImage.classList.add('book-image');
    bookContent.appendChild(bookImage);

    const img = document.createElement('img');
    img.src = book.image;
    img.alt = book.name;
    bookImage.appendChild(img);

    const addFavBtn = document.createElement('a');
    addFavBtn.href = `/book/${book.id}/favourite`;
    addFavBtn.className = 'btn fav-btn';
    bookImage.appendChild(addFavBtn);

    const heartIcon = document.createElement('span');
    heartIcon.className = 'ri-heart-line';
    addFavBtn.appendChild(heartIcon);

    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');
    bookContent.appendChild(bookInfo);

    const bookCtg = document.createElement('h4');
    bookCtg.classList.add('book-category');
    bookCtg.textContent = book.category;
    bookInfo.appendChild(bookCtg);

    const bookName = document.createElement('h3');
    bookName.classList.add('book-name');
    bookName.textContent = book.name;
    bookInfo.appendChild(bookName);

    const bookAuthor = document.createElement('h5');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = book.author;
    bookInfo.appendChild(bookAuthor);

    booksFlex.appendChild(singleBook);
  });
};

// Add to favourite
const buttons = Array.from(favBtn);
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    fetch(`/book/${id}/favourite`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        book_id: id,
      }),
    })
      .catch((err) => console.log(err));
  });
});
