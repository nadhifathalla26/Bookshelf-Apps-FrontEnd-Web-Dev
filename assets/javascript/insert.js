function insertData(book) {
    let bookData = [];
    if (!localStorage.getItem(localStorageKey)) {
        localStorage.setItem(localStorageKey, 0);
    }
    else{
        bookData = JSON.parse(localStorage.getItem(localStorageKey));
    }

    bookData.unshift(book);
    localStorage.setItem(localStorageKey,JSON.stringify(bookData));

    showData(getData());
}

function getData() {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
}

function showData(books = []) {
    const inCompleted = document.querySelector("#incompleteBookshelfList");
    const completed = document.querySelector("#completeBookshelfList");

    inCompleted.innerHTML = '';
    completed.innerHTML = '';

    books.forEach(book => {
        if (book.isCompleted == false) {
            let out = `
            <article class="book_item">
                <h3 style="text-align:justify;">${book.title}</h3>
                <p style="text-align:justify;">Penulis: ${book.author}</p>
                <p>Tahun: ${book.year}</p>

                <div class="action" style="margin-top: 30px;">
                    <button class="green" onclick="readedBook('${book.id}')">
                        <span>Selesai Dibaca</span>
                    </button>
                    <button class="red" onclick="deleteBook('${book.id}')">
                        <span>Hapus Buku</span>
                    </button>
                </div>
            </article>
            `

            inCompleted.innerHTML += out;
        }
        else {
            let out = `
            <article class="book_item">
                <h3 style="text-align:justify;">${book.title}</h3>
                <p style="text-align:justify;">Penulis: ${book.author}</p>
                <p>Tahun: ${book.year}</p>

                <div class="action" style="margin-top: 30px;">
                    <button class="green" onclick="unreadedBook('${book.id}')"> 
                        <span>Belum Selesai Dibaca</span>
                    </button>
                    <button class="red" onclick="deleteBook('${book.id}')">
                        <span>Hapus Buku</span>
                    </button>
                </div>
            </article>
            `
            completed.innerHTML += out;
        }
    });
}