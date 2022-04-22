buttonSearch.addEventListener("click", function(ev) {
    ev.preventDefault()
    if (localStorage.getItem(localStorageKey) == "") {    
        alert("Tidak ada data buku");
        return location.reload();
    }
    else {
        const getTitle = getData().filter(attribute => attribute.title == searchValue.value.trim());
        if (getTitle.length == 0) {
            const getAuthor = getData().filter(attribute => attribute.author == searchValue.value.trim());
            if (getAuthor.length == 0) {
                const getYear = getData().filter(attribute => attribute.year == searchValue.value.trim());
                if (getYear.length == 0) {
                    alert(`Data yang anda cari tidak ditemukan`);
                    return location.reload();
                }
                else{
                    showSearchResult(getYear);
                }
            }
            else{
                showSearchResult(getAuthor);
            }
        }
        else{
            showSearchResult(getTitle);
        }
    }

    searchValue.value = '';
})

function showSearchResult(books) {
    const searchResult = document.querySelector("#searchResult");

    searchResult.innerHTML = '';

    books.forEach(book => {
        let out = `
        <article class="book_item">
            <h3>Hasil Pencarian :</h3>
            <p class="search">Pencarian menunjukkan ditemukannya buku berjudul "${book.title}" </p>
            <p class="search">Penulis: ${book.author}</p>
            <p class="search">Tahun: ${book.year}</p>
        </article>
        `
        searchResult.innerHTML += out;
    });
}