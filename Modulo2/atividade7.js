process.stdout.write("Digite um número inteiro: ");
process.stdin.once ('data', function (data) {
    resposta = data.toString().trim();

    if (resposta % 2 === 0) {
        console.log("Este número é par.");
    } else {
        console.log("Este número é ímpar.");
    }
    
    process.exit();
})