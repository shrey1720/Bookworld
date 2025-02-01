// Search function to filter books
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', filterBooks);

function filterBooks() {
    const query = searchBar.value.toLowerCase();
    const books = document.querySelectorAll('.book-card');
    const selectedGenre = document.querySelector('.dropdown-content a.active')?.getAttribute('onclick')?.split("'")[1];

    books.forEach(book => {
        const title = book.querySelector('h4').textContent.toLowerCase();
        const description = book.querySelector('p').textContent.toLowerCase();
        const bookGenre = book.closest('.genre-section').getAttribute('data-genre');

        // Check if book matches query and genre filter
        if ((title.includes(query) || description.includes(query)) && 
            (selectedGenre === undefined || selectedGenre === bookGenre || selectedGenre === 'all')) {
            book.style.display = 'flex';
        } else {
            book.style.display = 'none';
        }
    });
}

// Function to filter books by genre
function filterByGenre(genre) {
    const allBooks = document.querySelectorAll('.genre-section');
    
    // Remove active class from all genres
    const allGenreLinks = document.querySelectorAll('.dropdown-content a');
    allGenreLinks.forEach(link => link.classList.remove('active'));

    // Highlight the active genre link
    const selectedLink = document.querySelector(`.dropdown-content a[onclick="filterByGenre('${genre}')"]`);
    selectedLink.classList.add('active');

    // Show books of the selected genre
    allBooks.forEach(bookSection => {
        if (genre === 'all' || bookSection.getAttribute('data-genre') === genre) {
            bookSection.style.display = 'block';
        } else {
            bookSection.style.display = 'none';
        }
    });

    // Reset search bar when switching genre
    searchBar.value = '';
    filterBooks(); // Apply search filter if any
}
