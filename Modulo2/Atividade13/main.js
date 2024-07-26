const LivroRepository = require('./livroRepository');
const LivroService = require('./livroService');
const Menu = require('./menu');
const prompt = require('prompt-sync')();

const livroRepository = new LivroRepository();
const livroService = new LivroService(livroRepository);
const menu = new Menu(livroService);

function showMenu() {
  menu.displayMenu();
  const option = prompt('Escolha uma opção: ');
  menu.handleUserInput(option);
  showMenu();
}

showMenu();
