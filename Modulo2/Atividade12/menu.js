const prompt = require('prompt-sync')();
const AlunoService = require('./alunoService');

class Menu {
  constructor(alunoService) {
    this.alunoService = alunoService;
  }

  displayMenu() {
    console.log("1. Cadastrar Aluno");
    console.log("2. Listar Alunos");
    console.log("0. Sair");
  }

  handleUserInput(input) {
    switch (input) {
      case '1':
        this.cadastrarAluno();
        break;
      case '2':
        this.listarAlunos();
        break;
      case '0':
        console.log("Saindo...");
        process.exit(0);
      default:
        console.log("Opção inválida, tente novamente.");
    }
  }

  cadastrarAluno() {
    const nome = prompt("Digite o nome do aluno: ");
    const idade = prompt("Digite a idade do aluno: ");
    const curso = prompt("Digite o curso do aluno: ");
    this.alunoService.cadastrarAluno(nome, idade, curso);
    console.log("Aluno cadastrado com sucesso!");
  }

  listarAlunos() {
    const alunos = this.alunoService.listarAlunos();
    if (alunos.length === 0) {
      console.log("Nenhum aluno cadastrado.");
    } else {
      alunos.forEach((aluno, index) => {
        console.log(`${index + 1}. ${aluno.getNome()} - ${aluno.getIdade()} anos - Curso: ${aluno.getCurso()}`);
      });
    }
  }
}

module.exports = Menu;