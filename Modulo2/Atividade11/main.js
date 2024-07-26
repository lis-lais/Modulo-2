const Notas = require('./notas');
const NotasService = require('./notasService');
const ErrorHandler = require('./errorHandler');
const prompt = require('prompt-sync')();

const notas = new Notas();
const notasService = new NotasService(notas);

function solicitarNotas() {
  try {
    const input = prompt("Digite suas notas (separadas por vírgulas): ");
    const newNotas = input.split(',').map(item => parseFloat(item.trim()));
    newNotas.forEach(nota => notas.adicionarNota(nota));

    const media = notasService.calcularMedia();
    console.log("A média das notas é:", media.toFixed(2));
  } catch (error) {
    ErrorHandler.handleError(error);
  }
}

solicitarNotas();