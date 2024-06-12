process.stdout.write("Você gosta de café?  (sim/não): ");
process.stdin.once ('data', function (data) {
    resposta = data.toString().trim();

    if (resposta === 'sim') {
        console.log("Vou fazer um pouco.");
    } else if (resposta === 'não') {
        console.log("Que pena, não sabe o que está perdendo.");
    } else {
        console.log("Resposta inválida. Por favor, responda 'sim' ou 'não'.");
    }
    
    process.exit();
})