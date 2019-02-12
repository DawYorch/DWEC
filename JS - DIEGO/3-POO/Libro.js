


class Libro{

    constructor(Titulo, Autor, Pais, Isbn){
        this.Titulo = Titulo;
        this.Autor = Autor;
        this.Pais = Pais;
        this.Isbn = Isbn;
    }


        setTitulo(value){
            this.Titulo = value;
        }
        setAutor(value){
            this.Autor = value;
        }
        setPais(value){
            this.Pais = value;
        }
        setIsbn(value){
            this.Isbn = value;
        }

        getTitulo(){
            return this.Titulo;
        }
        getAutor(){
            return this.Autor;
        }
        getPais(){
            return this.Pais;
        }
        getIsbn(){
            return this.Isbn;
        }

}