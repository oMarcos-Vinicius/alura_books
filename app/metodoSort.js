const btnOrdenarPorPrecos = document.getElementById('btnOrdenarPorPreco');
let contatorDoPrecoOrdenado = 0;

btnOrdenarPorPrecos.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => {
        if (contatorDoPrecoOrdenado % 2 == 0) {
            return a.preco - b.preco
        } else {
            return b.preco - a.preco
        }
    });
    contatorDoPrecoOrdenado++;
    exibirOsLivrosNaTela(livrosOrdenados);
}