const AlunoRepository = require('./alunoRepository');
const AlunoService = require('./alunoService');
const Menu = require('./menu');
const prompt = require('prompt-sync')();

const alunoRepository = new AlunoRepository();
const alunoService = new AlunoService(alunoRepository);
const menu = new Menu(alunoService);

function showMenu() {
  menu.displayMenu();
  const option = prompt('Escolha uma opção: ');
  menu.handleUserInput(option);
  showMenu();
}

showMenu();