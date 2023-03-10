let livros = [];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    //console.table(livros);
    const livrosComDesconto = aplicarDesconto(livros);
    //console.table(livrosComDesconto)
    exibirOsLivrosNaTela(livrosComDesconto);
}