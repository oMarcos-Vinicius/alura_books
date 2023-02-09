const btnOrdenarPorPrecos = document.getElementById('btnOrdenarPorPreco');
let crescenteOuDecrescente = 0; // Par é decrescente e impar é crescente

btnOrdenarPorPrecos.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => {
        if (crescenteOuDecrescente % 2 == 0) {
            return a.preco - b.preco
        } else {
            return b.preco - a.preco
        }
    });
    crescenteOuDecrescente++;
    exibirOsLivrosNaTela(livrosOrdenados);
}