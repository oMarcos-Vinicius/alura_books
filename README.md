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

<h2>05. Como funciona o forEach</h2>

<p>[00:00] Nosso desafio agora é pegarmos as informações do json, que a colocamos na nossa variável de livros, e exibi-las na tela. A primeira ideia que nos vem à cabeça é a seguinte: já que temos a lista de livros, o que é a que podemos fazer? Poderíamos fazer um for para falar pegarmos o livro no índice 0, que tem o título 0, que tem o preço 0 e montar na tela, essa estrutura da classe de livro que comentamos.</p>

<p>[00:28] Então vamos criar uma nova classe de livro, essa classe vai ter uma imagem. Quando chegar no src, queremos pegar essa imagem que está dentro do src da nossa classe, esse HTTP que é um link que contém a imagem desse livro.</p>

<p>[00:41] Quando chegar na parte do nome do livro, temos o título do livro e assim por diante. Fazemos esse comportamento para todas as outras classes que temos. Só que, se eu faço isso na mão, isso vai ficar muito "verboso", principalmente utilizando o for.</p>

<p>[00:57] Assim que percebemos a utilidade e o benefício de utilizar métodos especiais de array. E eu quero pesquisar o primeiro método junto com vocês. Vou digitar forEach. Deixe-me colocar forEach mozilla, que conseguiremos até rodar um exemplo bacana dele.</p>

<p>[01:12] Vou clicar nesse primeiro link array.prototype.forEach(). Ele fala assim: o método forEach() executa uma função dada para cada elemento do array. Isso parece que faz sentido para nós. O que é que nós queremos pegar? Cada elemento do array e criar para ele uma classe de livro, com todas as características que ele tem.</p>

<p>[01:31] E o próximo elemento? Cria mais uma classe de livros e assim por diante. Então para nós parece que faz sentido. Vamos testar, só para vermos na prática acontecendo?</p>

<p>[01:41] Eu quero que você faça junto comigo. Na parte superior direita da tela, onde está escrito "Português (do Brasil)", clicaremos e selecionaremos a língua inglesa. Quando selecionamos a língua inglesa, aparece um try it, que seria para testarmos o nosso código.</p>

<p>[01:55] Eu vou escrever um código, se você quiser escrever junto comigo pode, mas eu recomendo que você assista e você preste atenção no que eu vou fazer.</p>

<p>[02:04] Primeiro de tudo, eu vou criar uma variável chamada livros e vou falar que ela vai ser igual a uma lista e vou atribuir já os valores. Eu tenho o livro de JavaScript, temos livros de Python e temos livros também de Go. Eu vou deixar em maiúsculo, para ficar certa a escrita e vou fechar.</p>

<p>[02:22] Tenho uma lista de livros com três elementos. O que é que eu faria da forma clássica, sem utilizar o forEach? Eu faria um for onde let i=0;) que é o clássico. Depois eu falaria assim: enquanto i for menor que livros.length, enquanto livros for menor que o tamanho de elementos, de itens que eu tenho nessa minha lista, você vai continuar incrementando.</p>

<p>[02:49] E aqui eu colocaria uma chave e outra chave fechando. E aqui eu faço, por exemplo, um console.log e aqui eu coloco livros, no plural, com o índice que ele está trabalhando e fecho o parênteses. Se eu for para baixo e rodar esse código, ele vai mostrar "Js", "Python" e "Go". Maravilha, conseguimos o resultado que queríamos.</p>

<p>[03:13] Só que, lembra que eu falei? Essa forma é muito verbosa, olha o tanto que eu tenho que escrever para conseguir esse resultado. O que eu vou fazer? Eu vou comentar essas três linhas e vou escrever agora utilizando esse método que estamos pesquisando, que é o forEach.</p>

<p>[03:28] Então temos alguns exemplos das sintaxes, como é que ele funciona, quais são os parâmetros que ele utiliza. E tem algumas formas. Eu posso fazer utilizando o arrow function, que é uma das formas mais comuns de encontrarmos nos códigos.</p>

<p>[03:42] Então eu vou passar o forEach, vou passar aqui dentro um elemento e o que eu quero que ele faça depois. Primeiro, eu vou pegar a minha lista, o meu array livros.forEach. Lembrando que forEach é uma palavra case sensitive, então vai fazer diferença eu escrever o "e" com maiúsculo ou minúsculo.</p>

<p>[04:00] Se você observar: "e" maiúsculo; em cima também: "e" maiúsculo. Então "for" minúsculo, "e" maiúsculo e "ach" minúsculo. forEach.</p>

<p>[04:12] Então dentro do forEach eu tenho uma lista de livros. O for, em inglês, significa para; each significa cada. Então para cada livro - eu vou escrever livro - dentro da minha lista de livros, eu quero fazer alguma coisa, eu quero realizar alguma ação.</p>

<p>[04:29] Então eu vou colocar uma arrow function abrindo => e vou colocar a nossa arrow function. E aqui eu posso colocar a mesma ideia que tínhamos ali, console.log(livro) que é a manipulação que já estamos utilizando.</p>

<p>[04:43] Vou rodar esse código e temos o mesmo resultado. Puxa Gui, você fez alguma coisa, alguma mágica, eu vou fazer o meu código quebrar, para vocês verem que isso está funcionando. Olha, console.log, tirei o parênteses, eu vou rodar e ele vai falar "opa, você esqueceu de colocar um parênteses depois do argumento".</p>

<p>[04:58] Então eu vou colocar o parênteses, quando eu rodo temos o mesmo resultado. E embaixo tem algumas formas, podemos receber mais parâmetros como o elemento que estamos utilizando, o index e a própria array que iremos utilizar.</p>

<p>[05:14] Se precisarmos de algum caso específico, olha, quando tiver um index eu quero que tenha tal comportamento, conseguimos fazer isso também.</p>

<p>[05:23] Podemos utilizar arrowFunction ou funções callback, forEach e uma outra função call-back para utilizar essa ação em todos os elementos. O que eu quero deixar claro no coração de vocês é o seguinte: forEach, ele vai pegar cada elemento da nossa lista, do nosso array e vai executar uma determinada função que passaremos.</p>

<p>[05:45] Gui, deu para entender, criei livros.forEach(livro => { console.log(livro) }. Mas como é que fazemos agora para o nosso código, para criarmos, de fato, uma função com o forEach para exibir os livros na tela? Veremos isso no próximo vídeo.</p>

<h2>06. forEach de livros</h2>

<p>[00:00] Vamos agora colocar os livros na tela? Primeira coisa que eu vou fazer vai ser pegar o elemento em que colocaremos os nossos livros. Então se observarmos, a seção 32, nós não comentamos essa section, deixamos ela aberta, livros está aberta, tanto que formos até o final, encontraremos section fechando. Olha, section fechando de livros.</p>

<p>[00:22] O que é que eu vou fazer? Eu vou pegar esse elemento, de section de livros e vou inserir cada livro dentro dessa section. O nosso código main para conseguirmos pegar essa section que estamos utilizando. O que é que eu vou fazer? Vou criar uma constante const elementoParaInserirLivros = document.getElementById('livros'), que é o id que temos no nosso HTML.</p>

<p>[00:56] Deixe-me abrir o HTML, que é esse id aqui, id="livros". Maravilha. Tenho esse id de livros nessa constante. Então agora o que precisamos fazer é de fato esse for, queremos exibir os livros na tela. Então o que é que eu vou fazer? Estamos utilizando o console.table, eu vou deixá-lo por enquanto, só para pegarmos algumas informações, mas depois eu vou tirá-lo.</p>

<p>[01:16] Então, da mesma forma que fazemos um console.table(livros), eu quero exibirOsLivrosNaTela, alguma coisa desse tipo, e eu vou passar quem? Vou passar os meus livros que eu peguei da minha requisição.</p>

<p>[01:31] Primeira coisa, vamos criar essa nossa função. Vai ser uma função, vai ter o nome de exibirOsLivrosNaTela, vou receber como parâmetro, vou colocar (listaDeLivros) para ficar mais claro o que eu quero fazer junto com vocês. Então vamos atacar essa função agora. O que é que eu tenho nessa função?</p>

<p>[01:53] Eu recebo uma lista de livros, esses livros que eu passo aqui, dentro dessa função vai chamar listaDeLivros. Então, o que eu quero fazer é pegar essa lista de listaDeLivros e fazer um forEach dele. Eu vou abrir os parênteses e vou criar, da mesma forma que eu mostrei no exemplo anterior.</p>

<p>[02:14] Eu vou pegar, para cada livro dentro dessa listaDeLivros, eu quero fazer uma determinada ação. Então => para criarmos a nossa arrowFunction, eu vou abrir e fechar chaves e a colocaremos o nosso código. O que é que temos? Temos o elemento para inserirmos os livros.</p>

<p>[02:35] Então eu vou pegar ele, elementoParaInserirLivros.innerHTML, ou seja, vai no elemento section class="livros wrap" id="livros" e o conteúdo dentro dele, quando eu coloquei inner.HTML é esse conteúdo dentro dele, eu quero colocar alguma coisa.</p>

<p>[02:51] O que é que eu vou fazer? Está vendo que eu tenho div class="livro"? Esse é um livro novo. Tudo isso faz referência a esse livro "Cangaceiro JavaScript". Então a imagem, o preço do livro, quem criou. Esse é um outro livro. Então se observarmos, todos os livros terão: um nome, que é o livro__titulo; um alt; uma imagem; uma descrição, um preço e assim por diante.</p>

<p>[03:19] Então o que é que eu vou fazer? Vou dar um "Ctrl + c" dessa linha toda, vou no nosso código e vou falar: innerHTML pega os livros e insere cada livro, cada id que eu tenho, eu começo do 0 e vou até o 11, esses 12 livros, dentro desse elemento inserirLivros.</p>

<p>[03:37] Para isso, eu vou colocar o sinal de += template string, com a crase invertida, vou dar um "Tab" dentro e "Ctrl + v". Vou voltar no nosso código e olha o que aconteceu? Aconteceu um negócio interessante. Ele pegou e colocou 12 vezes o livro "Cangaceiro JavaScript". Vou até ocultar para vermos.</p>

<p>[03:57] Olha, tem "Cangaceiro JavaScript" quatro, oito, 12. Ele colocou 12 vezes dentro dessa tag, só que não é muito bem isso que eu quero. Eu quero as informações que estão contidas no livro que utilizamos.</p>

<p>[04:10] Vamos pegar então essas informações que temos no livro. Então olha só, deixe-me abrir um pouco para o lado. Vou atualizar a página. Temos algumas informações como título, preço, autor, imagem, alt, quantidade e categoria.</p>

<p>[04:30] Então vamos começar a alterar essas informações. Primeiro temos src da imagem do livro. Como que chama no nosso json? Chama imagem. E para eu pegar a imagem do livro específico que eu estou trabalhando, o que é que eu vou fazer? Eu vou precisar alterar, de alguma forma, esse valor. Eu preciso alterar esse conteúdo.</p>

<p>[04:49] Como que eu faço isso? Eu vou pegar, vou utilizar o sinal ${} e dentro das chaves eu vou escrever livro, no singular. Por quê? Não se trata da minha lista de livros, se trata do livro que eu estou utilizando naquele momento. No nosso caso, na primeira volta que ele fizer, a primeira vez que ele passar nesse loop, vai ser o índice zero.</p>

<p>[05:09] Então eu quero que ele pegue o livro.imagem. Vou voltar na nossa aplicação e repara o que vai acontecer. Temos o "Vue", o "Postgre", o "Sass" e todas as outras informações também. E tem uma parte interessante no nosso código, que ele está mostrando os livros como indisponíveis.</p>

<p>[05:26] Trataremos isso mais para frente. Eu vou remover esse indisponivel vou deixar só assim: img class = "livro__imagens" src=${livro.imagem}". E visualizaremos cada livro de uma forma melhor. Só eu fazendo isso, já estamos vendo diversos livros diferentes. Não são todos os livros o "Cangaceiro JavaScript".</p>

<p>[05:47] Isso ficou incrível, ficou muito legal. Outra coisa muito importante, na API temos o alt dela. O alt das imagens que utilizamos. Tem o alt. Então eu posso fazer a mesma coisa: alt="${livro.alt}" e já temos o alt das imagens corretamente.</p>

<p>[06:05] Podemos até verificar, vou colocar nas imagens para vermos, nos elementos. Deixe-me atualizar, eu vou selecionar essa imagem clicando na seta, selecionando essa imagem, temos o alt: "Capa do livro de front-end com Vue.js", que é esse. Então está maravilha, está correto. Todos os alt estão corretos.</p>

<p>[06:29] O que é que temos? Esse é onde fica o título do livro. Então se é o título do livro ${lviro.titulo}. Descrição, está relacionado ao autor. Então ${} - deixe-me lembrar como está escrito, inspecionar, no console, eu esqueci de fechar, vou chutar - livro.autor, eu não lembro se é livro.autor. É livro.autor, então: o Caio, o Vinícius, o Nathan e assim por diante, maravilha.</p>

<p>[07:05] O preço? Temos ${livro.preço}. E para finalizar, temos a nossa classe de tags. Qual a tag que estamos utilizando? No nosso projeto, na API, ela está escrita como categoria. Então vamos colocar ${livro.categoria}. Vamos testar isso? Olha que incrível que ficou.</p>

<p>[07:35] Então já fizemos a requisição e utilizamos o forEach para criar cada um desses elementos de livro. Ele criou o livro de "Vue", o livro de "Postgre", o livro de "Saas", de "HTML e CSS" e todos os livros assim por diante. Então aprendemos como fizemos a requisição e como usamos o forEach para criar cada um desses elementos na tela.</p>

<h1>Módulo 02: Map novo array modificado</h1>

<h2>02. Como funciona o map</h2>

<p>[00:00] Nosso próximo desafio é aplicar um desconto nos valores dos preços de cada um dos livros. Para isso, utilizaremos o método map.</p>

<p>[00:11] O método map() invoca a função callback passada por argumento para cada elemento do array- e aqui um ponto muito importante - e devolve um novo array como resultado.</p>

<p>[00:22] Vamos testar isso, cliquei na opção "Português do Brasil", na parte superior direita da tela e vou selecionar a língua inglesa, temos a mesma tradução para o map e tem um teste que podemos visualizar.</p>

<p>[00:32] Esse teste fala que ele tem um array e uma constante const array1 = [1, 4, 5, 16]. E ele vai passar para uma função map e ele cria uma nova constante const map1 = array1.map, pega cada valor, cada elemento do array e faz ele vezes dois.</p>

<p>[00:54] Então, no console.log() o que é esperado é 2, 4, 18, 32, que é o dobro de cada um desses valores. Vamos rodar esse código para vermos e realmente temos isso. Só que tem um ponto importante que pode passar despercebido, que é o seguinte: esse método, assim como o método forEach, ele não altera o valor da array original, ele faz uma cópia para conseguir utilizar essas ações.</p>

<p>[01:18] Ou seja, ele passa por cada elemento do nosso array, que é invocado, executa uma determinada função, o comportamento que esperamos e retorna um novo array contendo os novos valores retornados.</p>

<p>[01:30] Essa função map é invocada da mesma forma que a função forEach. Só que, a função map, diferente do forEach, ela retorna um valor, geralmente. Se eu colocarmos console.log(array1), por exemplo, teremos os mesmos valores 1, 4, 9, 16 embaixo. Então o map vai alterar os valores para a nova array que utilizaremos, mas ele não altera a array principal. E diferente do forEach, teremos um retorno para essa nossa função.</p>

<p>[02:17] No próximo vídeo, quero começar a botar a mão na massa no nosso projeto, para alterarmos cada um desses valores embaixo.</p>

<h2>03. Desconto com map</h2>

<p>[00:00] Vamos organizar um pouco melhor o nosso código. Reparem que criamos a nossa função main, que faz a busca de livro e já colocamos a função com o forEach embaixo.</p>

<p>[00:15] Vamos a função forEach para ficar mais fácil conseguirmos identificar o nosso código. Eu vou criar um novo arquivo JavaScript dentro de app chamado "metodoForEach.js".</p>

<p>[00:33] E dentro desse metodoForEach, vamos pegar a constante do elemento que buscaremos e a função, da linha 12 até a linha 29. Dar um "Ctrl + X" para recortar e "Ctrl + V" para colar.</p>

<p>[00:48] Dessa forma, você vai ter em cada um dos arquivos, métodos específicos para você conseguir pesquisar depois essas informações. Então temos o metodoForEach, vou criar já um novo arquivo chamado "metodoMap.js". E em "index.html" importaremos esses dois.</p>

<p>[01:10] Temos o nosso arquivo main, teremos um novo script que vai ser o app/metodoForEach.js. Depois vai ter mais um script que vai ser o app/metodoMap.js. E vamos começar a mapear os nossos preços, aplicando um desconto.</p>

<p>[01:36] Como que faremos isso? Na nossa função que exibe os livros, lá no main, exibirOsLivrosNaTela, eu quero colocar uma outra informação. Eu quero aplicar esses descontos e exibir, de fato, os livros na tela já com o desconto. Vamos supor que isso faça muito sentido para o nosso negócio, para o que estamos criando.</p>

<p>[01:56] Vamos criar uma nova variável aqui dentro, eu vou tirar esse console.log também, não precisamos mais dele. No lugar desse console.log, depois que pegamos a resposta com o json, eu vou fazer o seguinte: vou criar uma nova variável que eu vou chamar de livrosComDesconto vai ser = uma função que criaremos agora aplicarDesconto. E passaremos para essa função todos os livros.</p>

<p>[02:33] Depois, exibiremos na tela todos os livros já com os descontos. Essa vai ser a nossa sacada. Vamos criar uma função que criará o desconto em todos os livros em metodoMap. Então function aplicarDesconto(livros).</p>

<p>[02:59] Em seguida, vamos definir o quanto de desconto queremos, eu vou colocar const desconto = 0.3 por exemplo, um valor. E agora passaremos esses livros com o desconto para cá.</p>

<p>[03:17] Então eu vou fazer o seguinte, vou criar a variável, vou usar livrosComDesconto = livros.map e vamos aplicar desconto em cada livro. Então, nossa arrowFunction, {} e vamos mandar ver nessa função. Primeira coisa, a função map vai precisar retornar alguma coisa, então eu vou colocar um return.</p>

<p>[03:50] Queremos pegar todos com todas as informações sem alterar nenhuma delas além do preço. Para isso, podemos usar no return e duas chaves {} para indicar que retornaremos um objeto. Vamos utilizar um operador especial do JavaScript que é ...livro. Quando colocamos as reticências ... e escrevoemos livro, ele vai fazer uma cópia de todo o nosso array, ou do nosso objeto existente, para outro objeto.</p>

<p>[04:27] Então faça uma cópia de tudo o que você tem de livro, mas eu vou precisar alterar o preço dele. Então faça uma cópia com esse spread operator, operator com JavaScript e eu vou alterar o preço dele.</p>

<p>[04:41] Para isso, vamos dizer que o livro.preco vai ser igual a livro.preco * desconto. E conseguiremos ver melhor. Está tudo em uma linha, eu só quebrei para visualizarmos corretamente, vou até tirar o zoom para vocês verem, o meu código está assim.</p>

<p>[05:04] Vou aumentar o zoom para vermos bem. Então pega tudo o que eu tenho de livro, faz uma cópia desse livro. Só que o preço eu vou fazer o livro.preco -.</p>

<p>[05:21] Em sequência, fazemos o return livrosComDesconto. Em nosso método main, pegamos os livros, depois aplicamos o desconto nesses livros e ele vai retornar o objeto.</p>

<p>[05:45] Pega esse objeto e guarda dentro dessa nossa variável de livros com desconto e exibe os livros com desconto na tela. Vamos atualizar e temos embaixo os livros com um desconto bizarro, está com muitos números decimais, precisaremos fixar esses valores.</p>

<p>[06:01] Podemos fazer isso ou no nosso código main, ou lá no nosso método forEach, podemos escolher. Eu posso colocar, por exemplo, no livro.preco um . toFixed(2) só para ele fixar em duas casas decimais, isso já resolveria o problema.</p>

<p>[06:25] Isso já resolveria a parte visual e eu acho que é o menos custoso para nós. Então, para arrumarmos aquela quantidade de valores periódicos da nossa dízima, eu vou fixar na exibição que ele vai estar em duas casas decimais.</p>

<h1>Módulo 03 - Filter: aplicando diferentes filtros</h1>

<h2>02. Filter</h2>

<p>[00:00] O nosso projeto está muito legal, está incrível. Aplicamos desconto nos livros, isso ficou incrível, está muito bonito! Porém, temos alguns botões que não demos tanta ênfase até o momento, mas começaremos a trabalhar nisso agora.</p>

<p>[00:13] Temos livros e determinadas categorias, como front-end, dados, livros de back-end como esse de Python. Eu quero clicar em um desses botões, "Livros de front-end", quando eu clicar, apenas os livros de front vão ser exibidos. Alteraremos esse conteúdo.</p>

<p>[00:35] Cliquei em "Livros de back-end" ou em "Livros de dados", eu quero visualizar só por determinadas categorias. E para esses três botões, nós utilizaremos um método especial chamado filter. Vamos pesquisá-lo também, então vou colocar array prototype filter e vou clicar nesse primeiro link do Mozilla, para entendermos.</p>

<p>[00:59] Então ele diz assim: o método filter() cria um novo array com todos os elementos que passam no testes implementado pela função fornecida. Legal, mas não entendi muito bem. Vamos tentar entender no exemplo que está em inglês? Então inglês, ele fala a mesma coisa, de uma função fornecida e ele tem um exemplo.</p>

<p>[01:19] Tem algumas palavras e ele quer filtrar const words e ele tem algumas palavras. Ele quer filtrar essas palavras e armazenar essas palavras em um novo resultado, ou seja, o método filter vai gerar, para nós, um novo array, com palavras que tenham mais de seis caracteres. E ele devolve esse resultado, então vamos ver se isso é verdade.</p>

<p>[01:42] Exuberante, mais de seis. Ok, tudo mais de seis. Exemplo legal, mas vamos criar um exemplo nosso, que faça sentido, para entendermos bem o que é que essa função faz.</p>

<p>[01:52] Então o exemplo que eu quero criar com vocês é: eu vou criar uma lista const idades e eu quero saber idades que podem dirigir ou não. Então eu tenho [10, 22, 42, 16, 50], por exemplo. Tenho algumas idades.</p>

<p>[02:21] O que eu quero fazer? Vou criar um novo array, que o método filter vai gerar um novo array, então eu vou escrever esse array: const podeDirigir = idades.filter e aqui a gente vai passar a nossa função.</p>

<p>[02:42] Lembrando que se quisermos, essa função que ele fala, função callback, seria exatamente isso, uma função que não passamos o nome e passaremos aqui dentro as idades, por exemplo, a idade. E a gente abre e fecha {} aqui, algo desse tipo. Mas eu vou já passar a nossa função com base na arrowFunction.</p>

<p>[03:05] Então eu vou pegar uma idade e essa idade eu vou fazer alguma coisa, que vai me retornar um valor, essa comparação vai me retornar um valor. Minha arrowFunction, faltou fechar um parênteses desse. A minha arrowFunction vai ser assim: ela vai ter um return, porque eu vou gerar uma nova lista e eu vou verificar se a idade é >= 18.</p>

<p>[03:31] E embaixo eu vou dar um console.log nos dois, tanto na podeDirigir, como nas idade para vermos que ela não mudou. Vamos escrolar o mouse um pouco para baixo, quando eu executo, pode dirigir: 223 42 e 50; e todas as idades: 10, 22, 42, 16 e 50.</p>

<p>[04:01] Então repara que o método filter, a principal diferença dele, para entendermos como ele funciona, é o seguinte: temos um array, com determinados valores, sejam eles idades, categorias, alguma coisa e queremos filtrar, criando um novo conjunto de elementos, uma nova array.</p>

<p>[04:21] Então essa função, sempre que passamos por ela, a função vai retornar um valor booleano e esse é um ponto interessante. Repara que eu falei idade >= 18 o valor booleano, vai ser verdadeiro ou falso, true ou false.</p>

<p>[04:35] Então, se o valor for verdadeiro, aí sim ele vai pegar esse valor e vai colocar nessa nossa outra array. Vou dar um zoom bem grande para vermos vem. Então, se o valor da idade for de fato maior ou igual a 18, ele vai armazenar na variável podeDirigir. Se não for, ele descarta e ele não utiliza aquela verificação, aquela idade.</p>

<p>[05:00] E o que é que faremos na sequência? Exatamente verificaremos, quando clicarmos no botão de front-end, se a categoria desse livro é front-end, se a dessa é front-end, se desse é front-end. E tudo o que for front-end eu vou ter um novo array, com todos aqueles elementos daquela categoria.</p>

<p>[05:19] E o mesmo para os outros, eu quero livros de back-end. Então todos os livros que são de back-end, que têm a categoria como back-end, serão utilizados lá.</p>

<p>[05:28] Então temos um exemplo bem lúdico, bem ilustrativo para mostrar como escrevemos esse método filter e um exemplo mais realista, que começaremos a atacar na sequência.</p>

<h2>04. Filter de livros</h2>

<p>[00:00] Eu quero mostrar para vocês uma forma de pegar mais de um botão e atribuir nesse mesmo botão a mesma função para otimizarmos o nosso código e evitar a duplicidade de código. Então temos três botões principais, que são: "Livros de front-end", "Livros de back-end" e "Livros de dados".</p>

<p>[00:17] Se formos em nosso código, observe que temos uma li para cada livro e tem um botão com uma classe. Essa classe é btn btn-back, classe btn btn-dados, btn btn-disponiveis e btn btn-ordenacao.</p>

<p>[00:30] O que é que eu posso fazer? Existe uma forma de eu falar assim: olha, vá lá no documento e pegue todos os botões que eu tenho nesse meu documento. Vou mostrar isso para vocês acontecendo no console, ok?</p>

<p>[00:43] Deixe-me minimizar, porque o console está gigante, nem eu estou conseguindo enxergar. Agora sim, no console. Então o que é que eu quero fazer? Vá lá no document.querySelectorAll, não apenas querySelector.</p>

<p>[00:57] Se eu colocar apenas querySelector, eu vou selecionar, quando ele encontrar o primeiro elemento, ele já vai pegar. Não é isso que eu quero. Eu quero que ele pegue todos os botões da minha tela. Então eu vou falar assim: pegue lá tudo o que for .btn. Vou fechar a aspa simples e fechar o parênteses.</p>

<p>[01:15] Repare que ele me devolveu uma lista. Então, quando eu dei o "Enter", ele devolveu btnFiltrarLivrosFront, btnFiltrarLivrosBack, btnFiltrarLivrosDados, btnLivrosDisponiveis e btnOrdenarPorPreco. Isso ficou incrível, é exatamente isso que eu quero.</p>

<p>[01:30] Então vamos lá no nosso código e ver como que podemos utilizar essa nossa função. Aqui temos o código anterior, que funcionava para essa função que faz o filtro dos livros. Eu vou remover essa função que faz esse filtro.</p>

<p>[01:43] E vou criar uma nova variável, vou chamar de const botoes. E essa const botoes vai ser do tipo document.querySelectorAll. Não é querySelector. Pessoal, não é querySelector só. É querySelectorAll.</p>

<p>[02:00] De todos, não quero só o primeiro elemento que ele encontrar, eu quero todos os elementos, entre aspas, que tenham o .btn. E guarda nessa nossa variável botoes. Beleza Gui, eu tenho minha lista de botões e eu guardei toda essa lista aqui dentro. O que é que eu vou precisar fazer?</p>

<p>[02:16] Eu vou precisar pegar o primeiro botão e falar: olha, quando tiver um evento de clique, você vai chamar filtrarLivros. Pegar o segundo botão e falar: olha, quando você tiver um evento de clique, você vai chamar a função filtrarLivros. O terceiro botão e assim por diante.</p>

<p>[02:30] Essa questão de pega o primeiro elemento, faz alguma coisa; pega o segundo elemento, faz alguma coisa; pega o terceiro elemento, faz alguma coisa, executa uma função, isso me lembra algo que já vimos, que se chama forEach.</p>

<p>[02:41] Olha que interessante, então eu vou usar uma solução que já aprendemos no curso, que é botoes.forEach. E o que é que eu quero fazer com cada botão? Então eu vou falar assim: cada botão eu quero realizar uma determinada ação. Que ação é essa?</p>

<p>[02:57] A ação vai ser btn.addEventListener que vai ser o clique que vai chamar a função de filtrar livros. Olha que incrível isso, ficou muito legal. Olha só, então com duas linhas, praticamente, conseguimos resolver o problema de pegar todos os botões e colocar a função de filtrar livros.</p>

<p>[03:18] Só que agora temos um novo problema. Qual que é o problema? O problema é que qualquer um dos botões vai filtrar para livros de front-end e não é isso que queremos. Olha só: vou atualizar a página e vou clicar no botão "Livros de front-end", no canto superior esquerdo da tela, vou abrir o inspetor.</p>

<p>[03:34] Vamos no console e ele deu um Array de sete posições. Deixe-me minimizar só para conseguirmos ver melhor. Eu vou clicar no botão "Livros de dados", na parte superior da tela, ele me deu um Array de sete. Vou colocar outro livros, está me dando a tabela.</p>

<p>[03:50] Qualquer um dos botões que eu clico, ele está me devolvendo essa mesma Array. Se eu colocar, por exemplo, dados, ele vai me devolver uma lista com dois elementos, que são dois livros que eu tenho.</p>

<p>[04:00] Então eu vou clicar no botão "Livros disponíveis", na parte superior da tela, e ele vai me devolver uma lista com dois. Se eu clicar no botão "Ordenar por preço", no canto superior direito da tela, lista com dois.</p>

<p>[04:07] Se eu clicar no botão "Livros de front-end", no canto superior esquerdo da tela, ele vai me dar os dois livros de dados, que é o que eu tenho na minha lista. Isso não faz muito sentido. De alguma forma, precisaremos manipular esse conteúdo. Precisaremos identificar e alterar esse conteúdo.</p>

<p>[04:21] Como é que podemos fazer isso? Bom, uma das formas que temos é a seguinte: conseguimos saber exatamente qual é o botão que estamos clicando, para saber qual é o id desse nosso botão.</p>

<p>[04:32] Então, observando na index, temos o id="btnFiltrarLivrosFront”, o id="btnFiltrarLvirosBack", id="btnFiltrarLivrosDados" e assim por diante, ok? Então o que é que eu poderia fazer?</p>

<p>[04:42] Se eu tenho a informação de um botão específico, que eu vou pegar, deixe-me pegar os botões: botoes no índice zero, no índice um. Não, no índice zero, que é o button0btnFiltrarLivrosFront.btn.btn-front. Vou falar btn é igual a isso.</p>

<p>[05:00] Então se eu digito btn, ele vai me mostrar button0btnFiltrarLivrosFront.btn.btn-front. Se eu tenho esse botão, eu consigo saber exatamente qual é o valor desse botão. Então se eu colocar um btn.value ele me devolve exatamente a informação front-end.</p>

<p>[05:15] Se eu for no meu índice de botões e pegar o valor, o índice um, por exemplo, que é o livro de back-end, olha que interessante: se eu colocar botoes[1].value, olha o que ele me devolve: back-end.</p>

<p>[05:36] Isso já me dá uma ideia. E se eu usar o .value para conseguir identificar exatamente qual é essa categoria que eu estou querendo encontrar?</p>

<p>[05:45] Então eu vou fazer o seguinte: eu vou criar uma const, que eu vou chamar de const elementoBtn = document.getElementById exatamente do botão que estamos trabalhando. Então eu vou chamar aqui (this.Id), que vai ser para eu conseguir saber qual é o botão que eu estou clicando, ok?</p>

<p>[06:14] Dessa forma eu falo assim: houve um clique, houve um evento de clique, chame essa função. Primeira coisa, primeira instrução que essa função vai fazer? Qual é o botão que está sendo clicado? Puxa, se eu sei o botão que está sendo clicado, eu consigo pegar o valor dele, a categoria dele.</p>

<p>[06:28] Vou criar uma nova variável, const categoria = elementoBtn.value. E o que eu posso fazer é colocar a categoria. Falar, olha o livro filtrado vai ter que ser igual a categoria que eu estou passando. E aqui eu faço um - nossa, eu escrevi errado, deixe-me arrumar isso. Que coisa, em? - console.table.</p>

<p>[06:58] Aqui eu fecho, eu não escrevi errado não, eu esqueci o parênteses, parecia que estava errado. É isso aí. Então o que é que eu fiz? Pega o id do botão que estamos, pegamos o elemento todo.</p>

<p>[07:08] Peguei o elemento? Eu vou pegar o valor que está contido em cada um desses elementos, que temos "front-end", "back-end" e "dados", por exemplo e você vai buscar, vai fazer um filtro com base nessa categoria.</p>

<p>[07:20] Vamos lembrar, se eu faço um filtro de uma lista vazia, eu não vou ter nenhum retorno, não vai ter nenhuma informação. Então o que é que acontece? Com esse código, se eu clicar no console, eu vou conseguir ver cada um desses livros.</p>

<p>[07:32] Então olha: "Livros de front-end", apareceram os livros de front-end; "Livros de dados", apareceram só os livros de dados, olha "Post", "CRISP" e o "Pandas"; "Livros de back-end", apareceram três, "Python", o "Springboot" e o livro de "Django.</p>

<p>[07:46] Então temos o comportamento que queríamos. E mesclamos duas informações: com o método forEach, para conseguir colocar a função específica de filtrar livros; e o método filter, para de fato realizarmos o filtro.</p>

<p>[07:59] Se eu clico, por exemplo, no botão "Livros disponíveis", na parte superior da tela, ou no botão "Ordenar por preço", no canto superior direito da tela, nada vai acontecer. Não receberemos nenhum erro e nada acontece. Olha, "Livros disponíveis" e "Ordenar por preço", não acontece absolutamente nada.</p>

<p>[08:10] Esses três estão exatamente como a queríamos. Nosso próximo desafio é mostrar esses livros que estão no console, na tela.</p>

<h2>05. Livros filtrados na tela</h2>

<p>[00:00] Quando clicamos em um dos botões, por exemplo, "Livros de dados", aparece no console todos os livros. Mas não é esse o comportamento que eu quero. Eu quero que, os livros que eu clique nesses botões apareçam na tela, ou seja, que os elementos sejam exibidos na tela.</p>

<p>[00:14] Para isso, o que é que faremos? No método forEach, se você navegar até ele, olha que interessante: temos uma função chamada exibirOsLivrosNaTela. Vamos usar essa função e ver o que é que vai acontecer com o nosso código?</p>

<p>[00:26] Então, no lugar de usarmos um console.table na linha oito do nosso método filter, eu colocaremos a função exibirOsLivrosNaTela(livrosFiltrados). Vamos ver o que é que vai acontecer? Eu vou fechar o meu console, para focarmos só no nosso código agora.</p>

<p>[00:42] E eu vou clicar no botão "Livros de dados", na parte superior central da tela. "Livros de dados", cliquei. Parece que não aconteceu nada de diferente, mas quando escrolamos o mouse, olha que interessante: os livros de dados já estavam aparecendo, que são o PostgreSQL e o livro de Python Pandas, Pandas Python, esses dois.</p>

<p>[00:59] E eles aparecem embaixo. Vou fazer o seguinte, vou clicar de novo no botão "Livros de Dados", na parte superior central da tela. Olha que louco, ele está colocando esses elementos, conforme eu vou clicando, embaixo. Então, nós temos todos os elementos, conforme clicamos nos botões para filtrar os novos livros, eles estão aparecendo embaixo.</p>

<p>[01:15] Não é esse comportamento que eu quero. Se eu clicar, por exemplo, no botão "Livros de front-end", na parte superior esquerda da tela, olha o tamanho que vai ficar agora a estrutura. Eu vou clicar agora no botão "Livros de Dados", na parte superior central da tela, ele está repetindo os livros. Não é isso que eu quero.</p>

<p>[01:25] Vamos lá, o que é que podemos fazer? Observando o nosso método forEach, temos esse elementoParaInserirLivros. E o que é que faremos? Assim que ele é clicado, que essa função é executada, ele pega a lista que ele recebeu, a lista de livros, não importa se são livros filtrados, se são livros da requisição da API, ele vai pegar e para cada livro ele vai inserir dentro desse elemento.</p>

<p>[01:46] O que poderíamos fazer é de fato pegar esse elemento, elementoParaInserirLivros, acessar o conteúdo dele .innerHTML e falar que o conteúdo dele vai ser sempre uma string vazia, ele vai ser limpo. Ou seja, sempre que clicarmos, ele vai limpar e vai mostrar apenas os livros que estamos visualizando.</p>

<p>[02:06] Então teremos livros de front-end, aparece só os livros de front-end. Podemos até validar isso com as categorias, olha só, todas as categorias de front-end. Livros de back, agora sim, back-end, back-end e back-end. E livros de dados, aparece aqui embaixo, dados e dados.</p>

<p>[02:22] Dessa forma, o nosso código ficou muito mais interessante e estamos reutilizando códigos que nós já tínhamos feito. Vimos também que podemos cruzar informações entre esses métodos de array, por exemplo, o forEach e o filter também, que utilizamos os dois para realizar o filtro dos botões e isso ficou incrível.</p>

<h1>Módulo 04. Sort: ordenando a lista</h1>

<h2>02. Como funciona o sort</h2>

<p>[00:00] O nosso próximo desafio vai ser ordenar os livros por preço. Então, no botão "Ordenar por preço", na área superior direita da tela, eu vou clicar nele e eu quero ordenar esses livros, por preço. Quando eu clico, ele some. Os erros porque estamos chamando aquela função de filtrosLivros, mas não tem nenhuma ordenação ali.</p>

<p>[00:16] O que é que faremos? Vamos pesquisar o método de array responsável por essa tarefa de ordenação. Então eu vou colocar array prototype sort. Sort, em inglês, significa ordenar. Vou clicar aqui, ele está mostrando essa página está em português.</p>

<p>[00:32] Vamos ler essa em português, depois passaremos em inglês, para realizarmos alguns testes. Então vamos lá. O array.prototype.sort(), o método sort ordena os elementos do próprio array e retorna o array, retorna o array ordenado. A ordenação não é necessariamente estável.</p>

<p>[00:46] Quando clicamos nesse estável, vamos para um link do Wikipedia, falando o que é uma ordenação estável. Preserva a ordem dos registros de chaves iguais, então ele dá até um exemplo e fala enquanto a ordenação não estável está sujeita a ter um comportamento diferente.</p>

<p>[01:02] Em outras palavras, não vai ser uma ordenação que esperamos necessariamente, entenderemos o porquê. Ele fala também sobre o tempo de execução, depende da quantidade de memória que utilizaremos para realizar essa operação, também.</p>

<p>[01:18] E aqui tem um ponto muito interessante. Quando passamos uma array e fala para ela ser ordenada, conseguimos passar uma função de comparação para ela. Essa função vai definir exatamente a ordem dos elementos.</p>

<p>[01:30] E por que é que ela não é uma ordenação estável? Olha que interessante: o array é ordenado de acordo com a pontuação de código unicode de cada um dos caracteres, de acordo com a conversão de cada elemento para string.</p>

<p>[01:45] O que é que vai acontecer? Quando chamarmos essa função, ela vai transformar os nossos elementos em string, para depois - com base no código unicode - sim realizar essa ordenação. E tem um ponto interessante, ele até fala: note que o array é ordenado de acordo com a pontuação de código unicode.</p>

<p>[02:03] Então aqui embaixo, se escrolarmos, encontramos alguns exemplos interessantes. Ele tem uma sequência de frutas e ele faz a ordenação. Então tem "cherries", "apples" e "bananas". E ele fala para ordenar, aparece "apples", "bananas" e "cherries".</p>

<p>[02:15] Depois - esse é o ponto chave - var scores = [1, 10, 2, 21]. Se fôssemos ordenar isso, sem olhar o código, seria 1, 2, 10 e 21. Só que, quando ele pede para ordenar, olha o resultado que é: 1; não é o 2, é o 10; 2 e 21. Observe que o 10 vem antes do 2, porque o 10 vem antes do 2 em pontuação de código unicode.</p>

<p>[02:40] Certo, então teremos um super desafio. Por quê? No nosso código - eu vou voltar em todos, atualizando a página - percebe que temos vários valores? Como que ordenaremos esses valores, de forma que faça sentido, para os elementos virem ordenados de uma maneira estável?</p>

<p>[02:59] Precisaremos passar uma função de comparação para ela. Então eu quero realizar um teste com vocês. Alterei, cliquei na língua e selecionei inglês americano e tem alguns exemplos que podemos rodar. Então vamos lá.</p>

<p>[03:13] Ele ordenou alguns meses, ordenou alguns valores também. Lembra aqui 1 e apareceu - deixe-me ver que número é esse, 1, 2, 3, 1, 2, 3 - 100 mil, 21, 30, 4. Não faz muito sentido, não é isso que queremos.</p>

<p>[03:28] Vamos fazer então uma ordenação para nós, assim, um exemplo prático desse daqui. Então vamos pensar. Se a ordenação vai precisar de uma função de comparação para colocar exatamente os itens em uma ordenação estável, precisaremos realizar um teste. E o que é que eu quero fazer? Vamos realizar o seguinte teste.</p>

<p>[03:47] Então, eu vou ter uma variável chamada precos, eu vou passar alguns valores, então vai ser [29.98,1,101,110]. Eu vou pedir para serem ordenados esses valores, então eu vou criar uma nova variável, que eu vou chamar de precosOrdenados = precos.sort() para executarmos essa nossa função.</p>

<p>[04:26] Eu quero visualizar os dois, eu quero visualizar, eu quero um console.log(precos) e um console.log(precosOrdenados). Vamos rodar esse código, para vermos o que é que aconteceu. Rodamos e temos os preços e os preços ordenados, não está fazendo muito sentido.</p>

<p>[04:50] Estamos, deixe-me tirar, deixe-me deixar só o precoOrdenado, acho que vai ficar mais fácil, conseguimos visualizar ali em cima. Então vou voltar, vou rodar mais uma vez, olha o preço ordenado: [1, 101, 11, 110, 29.98], não está fazendo sentido nenhum isso.</p>

<p>[05:03] De alguma forma pediremos para ordenar nos valores que esperamos. O que é que esperamos dessa ordenação? Vou colocar aqui, esperamos que seja o 1 o primeiro elemento; depois esperamos que seja o valor 11; depois o valor 29.98; depois o valor 101 e depois o valor 110. É isso que esperamos.</p>

<p>[05:29] Como é que faremos isso? Passaremos uma função de comparação. Então function() {} e escreveremos a nossa função. Nessa função, passaremos dois valores: o valor de a e b. O que é que vai ser o valor de a e b? Vai ser o primeiro elemento e o segundo elemento. E ele vai fazer essa comparação.</p>

<p>[05:49] O que eu quero que ele faça? Eu quero que ele retorne na ordem estável, então eu vou colocar um return e vou falar que ele vai ser na ordem estável do menor para o maior a - b. E vou rodar isso mais uma vez, para visualizarmos se está tudo certo. Deixe-me ver se o código está certo.</p>

<p>[06:06] Parece que está certo, se não estiver certo ele vai nos alertar, então ele voltou: [1, 11, 29.98, 101, 110]. É exatamente o que precisamos. Gui, eu preciso de uma ordenação ao contrário, eu preciso do menor para o maior.</p>

<p>[06:24] E só inverter: eu vou fazer b - a. Vou ordenar, vou pedir para executar mais uma vez e temos uma ordenação contrária: 110, 101, 29.98, 11, 1]. E aqui tem um ponto interessante, que eu quero mostrar para vocês também, que é uma curiosidade.</p>

<p>[06:41] Sempre que ordenarmos e tiver algum elemento que é undefined, ele vai ser classificado no final da nossa matriz. Então eu vou colocar, no lugar do 1, eu vou colocar undefined. Undefined, escrevi certo.</p>

<p>[06:53] Então eu vou rodar isso, repare o que aconteceu: o 1 estava lá no meio. Se temos um elemento que é undefined, ele vai lá para o final da nossa matriz. Qual que é a sacada então, Gui? Sempre que pensarmos na ordenação e precisarmos de uma ordenação estável, nós vamos precisar de uma função.</p>

<p>[07:08] Puxa, mas eu tenho que escrever dessa forma? Não, podemos usar uma arrow function também. Então eu vou tirar isso, eu vou passar dessa forma para ele. Olha, se eu rodar esse código, a teremos o mesmo resultado. E podemos deixar até sem o return, porque estamos fazendo uma ação, apenas.</p>

<p>[07:22] Então eu vou tirar essas chaves e deixar o nosso código assim. Se eu rodar, também teremos o mesmo resultado. Então lembra: o sort vai classificar os elementos do array e retornar um array ordenado. Quando chamarmos esse sort com elementos que sejam undefined, esse undefined vai sempre para o final da nossa lista e eles são ordenados com base no unicode.</p>

<p>[07:44] Então tem que lembrar, ele transformou tudo para string, a ordenação dele não vai ser estável. Puxa, eu preciso de uma ordenação que seja estável, aí criamos uma função para fazer essa ordenação de comparação.</p>

<p>[07:56] Lembrando, eu preciso do menor para o maior: a - b. Então eu vou ordenar, ele vai mostrar 11, 29.98, 101, 110 e "undefined" lá no final. Eu preciso do maior para o menor, então eu coloco b - a e aí sim temos o resultado certo.</p>

<p>[08:12] Nosso próximo desafio é clicar nesse botão de ordenar e aplicar todo esse conhecimento do sort no nosso projeto.</p>

<h2>03. sort de livros</h2>

<p>[00:00] Vamos implementar essa ordenação por preço no nosso projeto? Primeira coisa que eu vou fazer vai ser acessar a pasta de app e criar um novo arquivo js, que eu vou chamar de metodoSort.js.</p>

<p>[00:15] Vou no index.html, nos scripts e vou falar: esse script também faz parte dessa nossa página < script src="app/metodosSort.js"></ script>. No nosso metodoSort, o que é que eu vou fazer?</p>

<p>[00:28] Se observamos o nosso index, temos um id desse botão. Podemos pegar o id desse botão, do btnOrdenarPorPreco, ele até tem uma classe btn btn-ordenacao, mas eu vou pegar esse id dele.</p>

<p>[00:45] Eu vou criar uma variável que eu vou chamar de let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco). Vou adicionar nesse btnOrdenarPorPreco um evento de clique: btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco) e vou criar essa função agora.</p>

<p>[01:32] function ordenarLIvrosPorPreco não temos parâmetros. Primeira coisa, pegaremos esses livros de algum lugar. Graças ao nosso método main, temos uma variável de livros disponível, que podemos usar.</p>

<p>[01:49] Eu vou chamá-la: livros.sort(). Eu vou ordenar e essa ordenação vai me devolver alguma coisa. Essa alguma coisa eu preciso armazenar em algum lugar. Então vou criar uma nova variável, que eu vou chamar de let livrosOrdenados = livros.sort().</p>

<p>[02:07] Só eu fazendo isso, será que já vou conseguir exibir na tela os livros com o preço correto? Não. Mas eu quero mostrar isso para vocês acontecendo. Olha só, no nosso método forEach, temos uma função chamada exibirOsLivrosNaTela.</p>

<p>[02:25] Vamos chamar essa função exibirOsLivrosNaTela(livrosOrdenados). Vamos ver o que é que vai ser exibido apenas com esse livros.sort, para vermos o que acontece?</p>

<p>[02:37] Eu estou na tela, atualizei a página, nem precisava atualizar, porque os livros já estavam aparecendo. Vou deixar o inspecionar para ficarmos de olho se receberemos alguma mensagem de erro ou alguma notificação.</p>

<p>[02:45] Vou colocar "Ordenar por preço" e ele mudou, ele piscou, aconteceu alguma coisa, só que os livros não estão ordenados. Repara que tem um 9,90 embaixo, não é o que precisamos.</p>

<p>[02:56] Lembrando: eu preciso de uma ordenação de valores que não seja no sentido alfabético, usando unicode, vou precisar passar uma função. Essa função eu posso passar da seguinte forma: vou falar que eu tenho o valor "a" e o valor "b", dos livros e eu quero comparar, quero fazer alguma coisa com esses valores.</p>

<p>[03:15] Então eu vou ter o livro "a" vai ter um preco e eu quero ordenar pelo maior preço para o maior, então vai ser "a" menos o valor do livro "b", e ele vai fazer essa comparação para todos livros.sort((a,b) => a.preco - b.preco).</p>

<p>[03:26] Voltando no nosso código, vou fechar o console para visualizarmos melhor. Vou clicar, repara os valores que temos: 20, 62, 55. Pedi para ordenar por preço, agora sim: 9,90, 11,90, 19, 29, 29, 49, 79, 89, 94, 139. Maravilha.</p>

<p>[03:45] Putz, quero ordenar no sentido oposto, então eu só inverto: livros.sort((a,b) => b.preco - a.preco). Quando eu volto no nosso código, eu peço para ordenar, ele vai mostrar o livro caro. Pessoal, isso é só fictício, esses valores não são os valores reais dos livros, tanto que se você quiser entrar na casa do código, lá estarão os valores corretos.</p>

<p>[04:02] Isso é meramente ilustrativo. Então vou voltar, quero ordenar por preço do menor para o maior livros.sort((a,b) => a.preco - b.preco) e exibir todos os livros na tela. Maravilha, isso ficou muito bacana.</p>

<h2>05. Filtrando livros disponíveis</h2>

<p>[00:00] Em nosso projeto, os botões de "Livros de front-end", "Livros de back-end", "Dados" e "Ordenar por preço" estão funcionando. Porém, o "Livros disponíveis" ainda não. Vamos fazer essa implementação?</p>

<p>[00:10] Primeira coisa, temos um método para filtrar os nossos livros. Dentro desse método, o que é que fazemos? Verificamos, pegamos as configurações do botão e pegamos o valor que esse botão tem. Então vamos ver qual é o valor que temos no index.html, do botão, para fazer o filtro.</p>

<p>[00:26] Temos o valor de livros disponíveis, btnLivrosDisponiveis, o valor é disponível. O que é que poderíamos fazer? Poderíamos falar: nessa nossa variável que vai pegar os livros filtrados, poderíamos falar se, por exemplo, categoria == 'disponível', por exemplo, o que é que queremos fazer?</p>

<p>[00:50] Queremos fazer um filtro de apenas os livros que tenham a quantidade maior do que zero. Senão, queremos fazer o filtro normal da categoria. Vamos fazer essa implementação? Eu vou colocar assim, deixe-me dar um "Ctrl + Esc" para visualizarmos bem.</p>

<p>[01:04] Se a categoria for == 'disponivel' ? eu quero pegar o livro da nossa lista de livros e fazer um .filter deles. Para cada livro, o que é que eu quero? Eu quero que ele tenha, o livro.quantidade > 0.</p>

<p>[01:26] Se a categoria for disponível, o que eu vou fazer? Eu vou pegar o livro e vou fazer um filtro com base na quantidade maior do que zero. Senão, eu vou fazer um filtro com base na categoria que já tínhamos. Vamos testar isso?</p>

<p>[01:41] "Livros de front-end": beleza. "Livros de back-end": beleza. "Livros de dados": beleza. Ordenação por preço: beleza. E "Livros disponíveis": agora sim, só os livros disponíveis. Repara que bacana, utilizamos o operador para fazer essa verificação, para saber qual tipo de filtro que utilizaremos.</p>

<p>[02:00] Vou dar um zoom para vermos bem. Então, o que é que fizemos? Essa nossa variável de livrosFiltrados vai ser baseada em uma condição. A categoria é disponível? É. Se for disponível, então pega a quantidade maior que zero.</p>

<p>[02:13] A categoria não é disponível, é dado, front, não importa, faz o filtro com base nessa categoria, então. Isso ficou bem legal.</p>

<h2>02. Manipulando HTML com JS</h2>

<p>[00:00] Nós temos um desafio muito interessante agora. Se a gente formos até embaixo da nossa página, notem como em todos os filtros que fazemos, temos esse elemento "todos os livros disponíveis por R$ 299,00".</p>

<p>[00:13] Então não importa a categoria que eu vou, sempre temos essa seção. Vamos olhar no nosso código onde que essa seção está? A seção no arquivo index.html, antes do footer, temos essa seção de valor_total_livros_disponiveis, tem a classe livros__disponiveis e tem a informação com o valor 299.</p>

<p>[00:34] Se eu alterar, por exemplo, para 199 ele vai alterar ali para 199 em todas as páginas. E qual que é o nosso desafio? Selecionaremos livros disponíveis e exibiremos essa informação aqui, vai mostrar essa seção disponível.</p>

<p>[00:49] Quando clicarmos em "Livros de front-end", "Livros de back", "Livros de dados" ou "Ordenação por preço", não exibiremos isso, manipularemos isso com JavaScript.</p>

<p>[00:59] Primeira coisa que faremos vai ser acessar o nosso arquivo main. Repara que temos aqui, buscamos o endpoint e depois, no forEach, temos o elemento da função que exibe, de fato, os livros na tela.</p>

<p>[01:14] O que é que faremos? Vamos pegar esse elemento, selecionar esse elemento dessa seção valor_total_livros_disponiveis, com esse id. Então vou chamar const, vou chamar aqui em cima, const elementoComValorTotalDeLivrosDisponveis = document.getElementById('valor_total_livros_disponiveis').</p>

<p>[01:50] O que é que faremos? Primeira coisa, limparemos esse elemento. Não queremos, sempre que o livro for exibido na tela, queremos acessar o conteúdo desse elemento e não exibir nada. Manipularemos isso lá quando for com os nossos livros do JavaScript.</p>

<p>[02:06] Não está aparecendo. Nem quando clicamos em "Livros disponíveis". O que é que faremos? Vamos no nosso metodoFilter e faremos o seguinte: temos a categoria. Podemos perguntar se a categoria desse livro for disponível, aí sim queremos mostrar aqueles livros.</p>

<p>[02:27] Eu posso fazer um filtro, exibe os livros na tela, desenha aqui, não importa em qual categoria e qual botão eu clique, ele vai colocar os livros. Depois, eu vou fazer uma pergunta, vou fazer assim: if (categoria == 'disponivel') o que eu quero fazer é exibir os livros, exibir essa seção na tela.</p>

<p>[02:54] Então vou criar uma função, que vou chamar de exibirValorTotalDosLivrosDisponiveisNaTela() e vou criar essa função agora, junto com vocês.</p>

<p>[03:09] function exibirValorTotalDosLivrosDisponiveisNaTela() e essa função vai fazer o que? Pegaremos aquele elemento que trouxemos, o elementoComValorTotalDeLivrosDisponiveis, vou colocar ele aqui e vou acessar o conteúdo desse elemento, .innerHTML = e eu vou fazer o seguinte, eu vou no nosso código HTML e vou copiar essa div aqui dentro dessa seção.</p>

<p>[03:35] "Ctrl + c" , volto no nosso metodoFilter e "Ctrl + v". Vamos ver se isso já resolveu o nosso problema. Vou atualizar a página. "Livros de front-end": não aparece nada. Na página principal, também não aparece. "Livros de back": não aparece. "Livros de dados": também não. "Ordenação por preço": também não.</p>

<p>[03:55] Quando clicamos em "Livros disponíveis" aí sim ele aparece. Está aparecendo, porém ele está aparecendo com um valor fixo, não está somando de fato o valor desses livros disponíveis que temos na nossa API.</p>

<p>[04:08] Então precisamos de alguma forma reduzir os valores, somar todos os valores dos livros disponíveis e manipular esse valor aqui dentro. Isso faremos na sequência. Antes de fazermos isso, vamos deixar o nosso código ainda mais limpo?</p>

<p>[04:23] Quando fazemos essa verificação na linha sete, dos livros disponíveis, fazemos assim: se a categoria for igual a disponível, faz o filtro pela quantidade. Então o que é que eu posso fazer? Vou selecionar tudo isso e ele vai dar uma opção para nós.</p>

<p>[04:39] Dar um "Option + z", "Ctrl + z" só para ele ver. Repara que tem uma lâmpada amarela do lado, eu vou clicar nela e vou colocar assim, selecionar essa opção: extrair para uma função global, de escopo global. E vou dar um nome, vou escrever assim: filtrarPorDisponibilidade, uma coisa assim.</p>

<p>[05:02] O que é que aconteceu? Ele tirou todo aquele código que estava aqui e passou para baixo, uma função que é filtrar por disponibilidade, que tem exatamente o filtro. E o outro, filtraremos por quê? Filtraremos por categoria.</p>

<p>[05:14] Então eu vou selecionar, voltando, selecionar todo esse livro, clico na lâmpada, extrair para uma função de escopo global e eu vou chamar de filtrarPorCategoria. Dar um "Enter" e olha que interessante, ele já extraiu para filtrar por categoria passando.</p>

<p>[05:32] Se voltarmos no nosso código, atualizar a página, repara que tudo está funcionando. "Livros de front"; "Livros de back"; "Livros de dados"; "Livros disponíveis" aparece lá embaixo; "Ordenação por preço" não aparece ali e está tudo uma maravilha agora.</p>

<p>[05:45] Gui, mas qual que é a vantagem de termos o nosso código assim? Repara que a leitura do entendimento do nosso código, a legibilidade, está muito melhor. livrosFiltrados = categoria. Se a categoria for disponível, exibe, faz o filtro por disponibilidade.</p>

<p>[06:01] Se não, faz o filtro por categoria, passando a categoria que você já tem como parâmetro. Fechou. Acho que essa parte de filtro ficou incrível, está legal. Clicando nos livros disponíveis, ele exibe aquela seção do valor total, só que precisaremos, de alguma forma, somar de verdade os valores dos livros que temos.</p>

<p>[06:22] E para isso, usaremos um método especial de array também.</p>

