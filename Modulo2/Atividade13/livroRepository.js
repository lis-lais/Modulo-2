const Livro = require('./livroController');

class LivroRepository {
  constructor() {
    this.livros = [];
  }

  salvar(livro) {
    this.livros.push(livro);
  }

  listar() {
    return this.livros;
  }

  buscarPorTitulo(titulo) {
    return this.livros.find(livro => livro.getTitulo() === titulo);
  }
}

module.exports = LivroRepository;