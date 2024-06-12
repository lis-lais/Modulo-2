let frase = [];

process.stdout.write("Digite uma frase: ");

process.stdin.on('data', function (data) {
    const input = data.toString().trim();
    frase = data.toString().trim();

    console.log(`Sua frase tem ${frase.length} caracteres.`)

    process.exit();
})