class Notas {
    constructor() {
      this.notas = [];
    }
  
    adicionarNota(nota) {
      if (typeof nota === 'number' && !isNaN(nota)) {
        this.notas.push(nota);
      } else {
        throw new Error("Nota inválida. Deve ser um número.");
      }
    }
  
    getNotas() {
      return this.notas;
    }
  }
  
  module.exports = Notas;  