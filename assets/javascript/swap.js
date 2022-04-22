function readedBook(id) {
    const bookDataInfo = getData().filter(attribute => attribute.id == id);
    const newBook = {
        id: bookDataInfo[0].id,
        title: bookDataInfo[0].title,
        author: bookDataInfo[0].author,
        year: bookDataInfo[0].year,
        isCompleted: true
    }

    const bookData = getData().filter(attribute => attribute.id != id);
    localStorage.setItem(localStorageKey,JSON.stringify(bookData));

    insertData(newBook);
}

function unreadedBook(id) {
    const bookDataInfo = getData().filter(attribute => attribute.id == id);
    const newBook = {
        id: bookDataInfo[0].id,
        title: bookDataInfo[0].title,
        author: bookDataInfo[0].author,
        year: bookDataInfo[0].year,
        isCompleted: false
    }

    const bookData = getData().filter(attribute => attribute.id != id);
    localStorage.setItem(localStorageKey,JSON.stringify(bookData));

    insertData(newBook);
}