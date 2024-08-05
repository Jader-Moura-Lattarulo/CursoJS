function Book(title, autor) {
    this.title = title;
    this.autor = autor;
    this.summary = function(){
        console.log(`"${this.title}" é um livro escrito por ${this.autor}.`);
    };
}

const book01 = new Book('1984', 'George Orwell');
book01.summary();
