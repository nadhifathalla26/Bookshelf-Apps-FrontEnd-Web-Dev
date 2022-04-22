function deleteBook(id) {
    let confirmation = confirm("Anda Yakin Akan Menghapus Data Buku Ini ?");
    if (confirmation == true) {
        const bookDataInfo = getData().filter(attribute => attribute.id == id);
        const bookData = getData().filter(attribute => attribute.id != id);
        localStorage.setItem(localStorageKey, JSON.stringify(bookData));
        showData(getData());
    }
    else{
        return 0;
    }
}