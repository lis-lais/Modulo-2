class Livro {
    constructor(titulo, categoria, autor) {
      this.titulo = titulo;
      this.categoria = categoria;
      this.autor = autor;
    }
  
    getTitulo() {
      return this.titulo;
    }
  
    getCategoria() {
      return this.categoria;
    }
  
    getAutor() {
      return this.autor;
    }
  }

  module.exports = Livro;