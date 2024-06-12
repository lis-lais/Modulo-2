let usuario = {
    nome: "",
    idade: "",
    cnh: ""
}

process.stdout.write("Digite seu nome: ");
process.stdin.once ('data', function (data) {
    usuario.nome = data.toString().trim();

process.stdout.write("Digite sua idade: ");
process.stdin.once ('data', function (data) {
    usuario.idade = data.toString().trim();

process.stdout.write("Digite a sua CNH: (apenas numeros)");
process.stdin.on ('data', function (data) {
    usuario.cnh = data.toString().trim();

    console.log(usuario.nome + ", tem " + usuario.idade + " anos" + " e CNH " + usuario.cnh + ".")

    process.exit();
})
})
})