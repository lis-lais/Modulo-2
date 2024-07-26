const Aluno = require('./alunoController');

class AlunoService {
  constructor(alunoRepository) {
    this.alunoRepository = alunoRepository;
  }

  cadastrarAluno(nome, idade, curso) {
    const aluno = new Aluno(nome, idade, curso);
    this.alunoRepository.salvar(aluno);
  }

  listarAlunos() {
    return this.alunoRepository.listar();
  }
}

module.exports = AlunoService;