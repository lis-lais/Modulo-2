//lista predefinida
const listaNumero = [3, 6, 9]

//solicita ao usuario um numero
process.stdout.write("Escolha um número de 1 a 10: ");

//escuta o evento de entrada de dados
process.stdin.on('data', function (data) {
    const numero = parseInt(data.toString().trim());

    //verifica se o numero está na lista
    let encontrado = false;
    for(let i in listaNumero) {
        if (listaNumero[i] === numero) {
            encontrado = true;
            break;
        }
    }

    //exibe o resultado
    if (encontrado) {
        console.log("O número", numero, "está presente na lista.");
    } else {
        console.log("O número", numero, "não está presente na lista.");
    }
    
    //fecha o processo
    process.exit();
})