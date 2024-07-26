const Livro = require('./livroController');

class LivroService {
  constructor(livroRepository) {
    this.livroRepository = livroRepository;
  }

  cadastrarLivro(titulo, categoria, autor) {
    const livro = new Livro(titulo, categoria, autor);
    this.livroRepository.salvar(livro);
  }

  listarLivros() {
    return this.livroRepository.listar();
  }

  buscarLivroPorTitulo(titulo) {
    return this.livroRepository.buscarPorTitulo(titulo);
  }
}

module.exports = LivroService;