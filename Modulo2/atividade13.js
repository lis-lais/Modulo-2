const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para criar um objeto Livro
function criarLivro(titulo, categoria, autor) {
    return {titulo, categoria, autor};
}

// Função principal
function main() {
    const livros = [];
    
    function cadastrarLivro() {
        rl.question(`Digite o titulo do livro: `, (titulo) => {
            rl.question(`Digite a categoria do livro: `, (categoria) => {  
                rl.question(`Digite o autor do livro: `, (autor) => {
                    const livro = criarLivro(titulo, categoria, autor);
                    livros.push(livro);
                    rl.question(`Deseja cadastrar outro livro? (s/n): `, (resposta) => {
                        if (resposta.toLowerCase() !== 's') {
                            mostrarLivros();
                        } else {
                            cadastrarLivro();
                        }
                    });
                });
            });
        });
    }

    function mostrarLivros() {
        console.log("\nLista de Livros Cadastrados:");
        livros.forEach((livro, index) => {
            console.log(`Livro ${index + 1}:`);
            console.log(`Titulo ${livro.titulo}`);
            console.log(`Categoria: ${livro.categoria}`);
            console.log(`Autor: ${livro.autor}`);
            console.log("-------------------------");
        });
        rl.question(`Deseja buscar um livro pelo título? (s/n): `, (resposta) => {
            if (resposta.toLowerCase() === 's') {
                buscarLivroPorTitulo();
            } else {
                rl.close();
            }
        });
    }

    function buscarLivroPorTitulo() {
        rl.question(`Digite o título do livro que deseja buscar: `, (titulo) => {
            const livrosEncontrados = livros.filter(livro => livro.titulo.toLowerCase().includes(titulo.toLowerCase()));
            if (livrosEncontrados.length > 0) {
                console.log("\nLivros encontrados:");
                livrosEncontrados.forEach((livro, index) => {
                    console.log(`Livro ${index + 1}:`);
                    console.log(`Titulo: ${livro.titulo}`);
                    console.log(`Categoria: ${livro.categoria}`);
                    console.log(`Autor: ${livro.autor}`);
                    console.log("-------------------------");
                });
            } else {
                console.log("Nenhum livro encontrado com esse título.");
            }
            mostrarLivros();
        });
    }

    cadastrarLivro();
}

// Chamada da função principal
main();
