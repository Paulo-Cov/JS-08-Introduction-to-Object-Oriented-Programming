class book {
    constructor (title, gender, author, read, dateRead) {
        this.title = title;
        this.gender = gender;
        this.author =author;
        this.read = read;
        this.dateRead = dateRead;
    }
}
class bookList {
    constructor () {
        this.numRead = null
        this.numToRead = null
        this.nextToRead = null;
        this.beingRead = null;
        this.lastRead = null;
        this.allBooks = [];
    }

    add (newBook){
        return this.allBooks.push(newBook)
    }
    finishCurrent(){

    }

}

let book1 = new book ("Se está haciendo tarde: (final en laguna)", "Novela", "José Agustín", true, new Date(2016, 8, 14));
let book2 = new book ("The Hitchhiker's Guide to the Galaxy", "Novela comica", "Douglas Adams", true, new Date(2018, 10, 6));
let myBookList = new bookList ();

myBookList.add (book1);
myBookList.add (book2);


console.log(book1);
console.log(book2);
console.log(myBookList.add(book2));