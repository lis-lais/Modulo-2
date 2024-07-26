class NotasService {
    constructor(notas) {
      this.notas = notas;
    }
  
    calcularMedia() {
      const todasNotas = this.notas.getNotas();
      const soma = todasNotas.reduce((acc, nota) => acc + nota, 0);
      return todasNotas.length > 0 ? soma / todasNotas.length : 0;
    }
  }
  
  module.exports = NotasService;  