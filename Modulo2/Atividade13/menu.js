const prompt = require('prompt-sync')();
const LivroService = require('./livroService');

class Menu {
  constructor(livroService) {
    this.livroService = livroService;
  }

  displayMenu() {
    console.log("1. Cadastrar Livro");
    console.log("2. Listar Livros");
    console.log("3. Buscar Livro por Título");
    console.log("0. Sair");
  }

  handleUserInput(input) {
    switch (input) {
      case '1':
        this.cadastrarLivro();
        break;
      case '2':
        this.listarLivros();
        break;
      case '3':
        this.buscarLivroPorTitulo();
        break;
      case '0':
        console.log("Saindo...");
        process.exit(0);
      default:
        console.log("Opção inválida, tente novamente.");
    }
  }

  cadastrarLivro() {
    const titulo = prompt("Digite o título do livro: ");
    const categoria = prompt("Digite a categoria do livro: ");
    const autor = prompt("Digite o autor do livro: ");
    this.livroService.cadastrarLivro(titulo, categoria, autor);
    console.log("Livro cadastrado com sucesso!");
  }

  listarLivros() {
    const livros = this.livroService.listarLivros();
    if (livros.length === 0) {
      console.log("Nenhum livro cadastrado.");
    } else {
      livros.forEach((livro, index) => {
        console.log(`${index + 1}. ${livro.getTitulo()} - ${livro.getCategoria()} - ${livro.getAutor()}`);
      });
    }
  }

  buscarLivroPorTitulo() {
    const titulo = prompt("Digite o título do livro: ");
    const livro = this.livroService.buscarLivroPorTitulo(titulo);
    if (livro) {
      console.log(`Livro encontrado: ${livro.getTitulo()} - ${livro.getCategoria()} - ${livro.getAutor()}`);
    } else {
      console.log("Livro não encontrado.");
    }
  }
}

module.exports = Menu;