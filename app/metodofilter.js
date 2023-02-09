const botoes = document.querySelectorAll('.btn')

botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponíveis' ? filtrarPorDisponibilidade() : filtrarLivrosPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponíveis') {
        let valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
};

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function filtrarLivrosPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}


function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}