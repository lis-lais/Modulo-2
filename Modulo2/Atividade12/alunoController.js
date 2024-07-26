class Aluno {
    constructor(nome, idade, curso) {
      this.nome = nome;
      this.idade = idade;
      this.curso = curso;
    }
  
    getNome() {
      return this.nome;
    }
  
    getIdade() {
      return this.idade;
    }
  
    getCurso() {
      return this.curso;
    }
  }
  
  module.exports = Aluno;  