let nome = '';
let idade = '';


process.stdout.write("Digite seu nome: ");
process.stdin.once ('data', function (data) {
    nome = data.toString().trim();

process.stdout.write("Digite sua idade: ");
process.stdin.on ('data', function (data) {
    idade = data.toString().trim();

    console.log("Olá, " + nome + " sua idade é " + idade + ".")

process.exit();
})
})
