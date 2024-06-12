const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para criar um objeto Aluno
function criarAluno(nome, idade, curso) {
    return { nome, idade, curso };
}

// Função principal
function main() {
    const alunos = [];
    let continuar = true;
    
    function cadastrarAluno() {
        rl.question(`Digite o nome do aluno: `, (nome) => {
            rl.question(`Digite a idade do aluno: `, (idade) => {  
                rl.question(`Digite o curso do aluno: `, (curso) => {
                    const aluno = criarAluno(nome, idade, curso);
                    alunos.push(aluno);
                    rl.question(`Deseja cadastrar outro aluno? (s/n): `, (resposta) => {
                        if (resposta.toLowerCase() !== 's') {
                            continuar = false;
                            rl.close();
                        } else {
                            cadastrarAluno();
                        }
                    })
                 })
                })
            })
        }

        cadastrarAluno();

    rl.on('close', () => {

    console.log("\nLista de Alunos Cadastrados:");
    alunos.forEach((aluno, index) => {
        console.log(`Aluno ${index + 1}:`);
        console.log(`Nome: ${aluno.nome}`);
        console.log(`Idade: ${aluno.idade}`);
        console.log(`Curso: ${aluno.curso}`);
        console.log("-------------------------");
    });
})
}
// Chamada da função principal
main();