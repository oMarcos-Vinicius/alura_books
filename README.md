# alura_books
Aprendendo métodos de array e requisições no JavaScript | Alura

<h1>Módulo 01. ForEach: função para cada elemento</h1>

<h2>03. Carregando o projeto base</h2>

<p>[00:00] Vamos iniciar os nossos estudos sobre métodos de array com JavaScript. Seu primeira passo é acessar o link "preparando ambiente" na atividade anterior a esse vídeo, lá vocês podem fazer download do projeto base que utilizaremos durante todo o nosso treinamento.</p>

<p>[00:14] Eu já fiz o download e o nome está "alura_books - projeto_inicial". Vou renomear esse download só para "alura_books" e vou usar o Visual Studio Code para editar o nosso código. Então eu vou arrastar esse alura_books para dentro e veremos o que é que temos para mexer nessa aplicação, nesse projeto.</p>

<p>[00:33] Então temos uma pasta, com várias imagens. Temos um "index.html". Logo mais entenderemos o que é cada etapa, o que são esses botões, como a estrutura está feita. Temos um arquivo que se chama "equisicao.txt", que eu já vou falar para você o que é. E o "style.css" para os estilos da nossa aplicação.</p>

<p>[00:52] Estou com o meu projeto base, com o download, o que eu preciso fazer agora é, de alguma forma, carregar esse projeto para conseguirmos visualizar o que mexeremos durante todo o nosso treinamento.</p>

<p>[01:03] Para isso, eu vou usar a extensão do Live Server, eu vou colocar live. Nesse primeiro link, Live Server. Eu vou instalar, o meu já está instalado, é só você instalar essa extensão. Eu vou clicar com o botão direito em cima - deixe-me fechar essa janela - do "index.html", eu vou colocar "abrir com o Live Server" ou "open with Live Server"</p>.

<p>[01:24] Eu vou carregar essa aplicação. Carregou a aplicação, vamos ver o que é que temos. Temos um cabeçalho em cima com o título e subtítulo: "AluraBooks, melhores livros de programação, encontre na nossa estante o que você precisa para o seu desenvolvimento".</p>

<p>[01:39] E temos alguns botões: "Livros de front-end", "Livros de back-end", "Livros de dados". Eu clico nesses botões e não acontece absolutamente nada, daremos vida para esses botões com o JavaScript.</p>

<p>[01:50] E tem alguns livros, então tem o "Cangaceiro JavaScript", tem o outro "Cangaceiro", repara que ele está com uma opacidade diferente. Então ele está mais fraco para conseguirmos visualizar, provavelmente é porque esse livro não está disponível. Em baixo tem algumas informações.</p>

<p>[02:06] O título do livro, o autor, o valor desse livro e tem uma tag das categorias. Então tem front-end, back-end, repare que essas tags estão todas não verdadeiras. Por exemplo, temos uma tag para o livro de SASS, que é para os pré-processadores de CSS, com back-end também, não faz muito sentido. É meramente ilustrativo.</p>

<p>[02:28] E embaixo temos todos os livros disponíveis por 299 reais. Alura, mergulhe em tecnologia. Esse é o visual, todo esse visual que estamos vendo está estático. O que isso significa? Que ele está direto no HTML, olha só: temos os nossos botões e, quando tem a seção de livros, tem o "Cangaceiro JavaScript" no livro__titulo, tudo isso está estático, ou seja, toda essa informação que estamos vendo na tela está diretamente no HTML.</p>

<p>[02:57] E no mundo real, não é isso que acontece. Geralmente buscamos essas informações de um banco de dados, ou de uma outra aplicação, ou de uma API. Então, o que é que faremos? No nosso treinamento, temos esse arquivo requisicao.txt. Repare que tem um endereço: https://guilhermeonrails.github.io/casadocodigo.livros.json.</p>

<p>[03:19] Eu vou clicar com o "Ctrl" e vou clicar em cima desse link para abrirmos e vermos o que é que acontece. Repara que, eu fazendo isso, ele me levou para uma outra página que tem: título, preço, autor, imagem, alt e categoria.</p>

<p>[03:32] Essas informações que estão aqui, elas estão do tipo json. Podemos até ver que tem esse nome livros.json. Então, geralmente, o que acontece? Um time focado no back-end vai criar todo o banco de dados, a comunicação. Vai falar: olha, vai ter uma tabela, chamada títulos, vai ter um autor que esse autor criou esse título desse livro, vai fazer toda aquela mágica no back-end conversando com o banco de dados.</p>

<p>[04:00] E para pegarmos essas informações exibirmos na tela, eu não quero exibir essas informações que já estão estáticas. Eu quero exibir tudo isso daqui, eu vou precisar fazer uma requisição. Então qual que vai ser o nosso desafio? Eu vou comentar todas essas linhas nossas de livro, então olha só, escrolando para baixo, quando começar a nossa seção, onde tem o id=livros, eu vou pegar do id < div class="livro" >, vou clicar na linha 33, vou deixar a linha 33 clicada. Vamos escrolar.</p>

<p>[04:33] E repare que acabou todo meu conteúdo de livro naquele id. Eu vou apertar o "Shift" e vou selecionar a linha 264. Agora vem uma mágica: eu vou selecionar o "Ctrl + /" ou "Cmnd + / " para eu comentar todos esses livros estáticos.</p>

<p>[04:50] E se eu volto na minha aplicação do AluraBooks, olha só o que aconteceu? Não está nenhum livro sendo exibido. Por quê? O que queremos fazer agora é uma requisição para exibir, de fato, esses livros que estão aqui. Então eu quero pegar todos esses livros e construir, utilizando, manipulando o DOM, cada um desses livros no AluraBook. E é isso que faremos na sequência.</p>

<h2>04. Fetch de livros no console</h2>

<p>[00:00] Agora que comentamos os livros estáticos do HTML que tínhamos aqui, queremos realizar uma requisição para esse endpoint que está anotado em nosso "requisição.txt" e pegarmos esse json e colocar os livros dentro do nosso AluraBooks.</p>

<p>[00:20] Para isso, vamos fazer por etapas. Primeiro queremos realizar a requisição. Vamos criar uma pasta chama "app" e dentro dela vamos manter todo nosso código JavaScript. Durante o nosso treinamento vamos ter mais de um códido JavaScript, então vamos colocar todos os códigos dentro dessa pasta para mantermos o projeto organizado.</p>

<p>[00:40] Dentro dessa pasta, vamos criar um arquivo chamado "main.js". Esse arquivos será responsável por de fato realizar a requisição e dizer que temos a variável livros com base na requisição já feito.</p>

<p>[01:00] No primeiro passo será criar essa variável chamada livros que será igual a uma array vazia, let livros = []. Em seguida, criamos uma constante chamada endpointDaApi que será igual ao conteúdo que temos em "requisição.txt": const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'</p>

<p>[01:36] Em seguida, fazemos um get para ele de fato fazer a requisição e buscar os livros da API. Então, getBuscarLivrosDaAPI(), ele será uma função.</p>

<p>[01:54] Queremos que essa função seja assíncrona. Para isso, precisamos definir a palavra async antes da palavra function. Em seguida, damos o nome da função: async function getBuscaLivrosDaAPI(). Não teremos parâmetros nessa função.</p>

<p>[02:07] Queremos que essa função seja assíncrona porque em nossa API estamos utilizando um projeto com alguns livros. Mas vamos supor que tenhamos onze milhões de livros cadastrados, essa função demoraria muito e provavelmente teríamos um erro.</p>

<p>[02:31] Para dizer que essa função precisa esperar uma promessa de receber todos os livros desse endpoint, vamos usar o await. Passamos uma requisição e obteremos uma resposta. Então vamos chamar res para termos uma resposta e deixaremos ela igual a await: const res = await. Ou seja: esper por uma promessa</p>

<p>[02:48] Nós sempre utilizamos para conseguirmos manipular as funções e essas requisições com HTTP esses APIs do fetch. Como queremos realizar uma função para o endpointDaAPI vamos passar ele como argumento: await: const res = await fetch(endpointDaAPI).</p>

<p>[03:04] Depois que pegarmos a resposta dessa aquisição, queremos atribuí-la a livros. E livros também será igual a await e a resposta dessa requisição queremos que seja transformada em json(): livros = wait res.json(). Em seguida, damos um console.log(livros) para exibirmos isso na tela.</p>

<p>[03:35] Como criamos um novo arquivo precisamos ir em "index.html" e adicionar o < script src="app/main.js"></ script> antes de fechar o < body >, na linha 276.Assim, vinculamos esse HTML com o JavaScript que estamos criando.</p>

<p>[04:06] No navegador, clicamos com o botão direito do mouse e selecionamos "Inspecionar". Em "Console" temos uma Array(12), ou seja, os livros estão aqui. Porém, a forma como estamos visualizando esses livros não está muito legal.</p>

<p>[04:20] Podemos alterar a forma que vemos eles substituindo o console.log() por console.table(). Agora ele monta uma tabela com todos os livros que temos. Assim, conseguimos ver todos os campos que utilizamos e todas as outras informações.</p>

<p>[04:37] Para visualizarmos melhor, vou tirar o await de de livros. Ele vai realizar uma requisição, essa requisição vai esperar uma promessa. Ele vai terminar de fazer essa requisição, mas não vai dar tempo dele montar a resposta em json. Para conseguirmos de fato visualizar essa resposta dessa promessa na nossa variável de livros, vamos usar o await.</p>

<p>[05:05] Dessa forma temos os livros da API. Metade dos nossos problemas foram resolvidos. Trouxemos as informações que estavam no endpoint para nossa aplicação. Mas agora queremos montar na tela, manipular o DOM. Como faremos isso utilizando métodos especiais de arrays com JavaScript? Descobriremos na sequência!</p>
