// Filter authors by genre
function filterByGenre(genre) {
    let authors = document.querySelectorAll('.author-card');
    
    authors.forEach(function(author) {
        if (genre === 'all') {
            author.style.display = 'block';
        } else {
            if (author.getAttribute('data-genre') === genre) {
                author.style.display = 'block';
            } else {
                author.style.display = 'none';
            }
        }
    });
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', function(event) {
    let searchValue = event.target.value.toLowerCase();
    let authorCards = document.querySelectorAll('.author-card');

    authorCards.forEach(function(card) {
        let authorName = card.querySelector('h3').textContent.toLowerCase();
        if (authorName.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
