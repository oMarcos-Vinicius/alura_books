const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');

btnFiltrarLivrosFront.addEventListener('click', filtrarLivrosDeFront)

function filtrarLivrosDeFront() {
    let livrosFiltrados = livros.filter(livro => {
        return livro.categoria == 'dados'
    })
    console.table(livrosFiltrados);
}