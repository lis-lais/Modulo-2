let nome = '';
let idade = '';
let possuiCNH = '';

process.stdout.write("Digite seu nome: ");
process.stdin.once ('data', function (data) {
    nome = data.toString().trim();

process.stdout.write("Digite sua idade: ");
process.stdin.on ('data', function (data) {
    idade = data.toString().trim();

process.stdout.write("Você possui CNH? (sim/não)");
process.stdin.on ('data', function (data) {
    possuiCNH = data.toString().trim();

    console.log("Olá, " + nome + " sua idade é " + idade + ".")

    if (possuiCNH === 'sim') {
        console.log("Você possui CNH.");
    } else if (possuiCNH === 'não') {
        console.log("Você não possui CNH.");
    } else {
        console.log("Resposta inválida. Por favor, responda 'sim' ou 'não'.");
    }

process.exit();
})
})
})