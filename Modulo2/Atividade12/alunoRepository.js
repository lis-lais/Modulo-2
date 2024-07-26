const Aluno = require('./alunoController');

class AlunoRepository {
  constructor() {
    this.alunos = [];
  }

  salvar(aluno) {
    this.alunos.push(aluno);
  }

  listar() {
    return this.alunos;
  }
}

module.exports = AlunoRepository;