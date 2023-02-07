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

[04:49] Como que eu faço isso? Eu vou pegar, vou utilizar o sinal ${} e dentro das chaves eu vou escrever livro, no singular. Por quê? Não se trata da minha lista de livros, se trata do livro que eu estou utilizando naquele momento. No nosso caso, na primeira volta que ele fizer, a primeira vez que ele passar nesse loop, vai ser o índice zero.

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