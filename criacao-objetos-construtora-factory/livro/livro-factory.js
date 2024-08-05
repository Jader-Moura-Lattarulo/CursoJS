function Book(title, autor) {
    return{
        title: title,
        autor: autor,
        summary(){
            console.log(`"${this.title}" é um livro escrito por ${this.autor}.`);
        }
    };
}

const book01 = Book('Generais de Deus', 'Liardon');
book01.summary();
