let notas = [];

process.stdout.write("Digite suas notas (separados por vírgulas): ");

process.stdin.once('data', function (data) {
    const input = data.toString().trim();
    const newNotas = input.split(',').map(item => parseFloat(item.trim()));

    for (let i in newNotas) {
        notas.push(newNotas[i]);
    }

    let soma = 0;
    for (let i in notas) {
        soma += notas[i];
    }

    const media = soma / notas.length;

    console.log("A média das notas é:", media);

    process.exit();
});
