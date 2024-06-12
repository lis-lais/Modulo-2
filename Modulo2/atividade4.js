let usuario = {
    anoNasc: "",
    idade: ""
}

process.stdout.write("Digite seu ano de nascimento: ");
process.stdin.once ('data', function (data) {
    usuario.anoNasc = data.toString().trim();

    anoAtual = new Date().getFullYear();
    idade = anoAtual - usuario.anoNasc;

    console.log("Se você nasceu em " + usuario.anoNasc + " , você tem " + idade + ".")

    process.exit();
})
