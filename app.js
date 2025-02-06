//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// vamos armazer e criar uma lista
let spanMensagem = document.getElementById('mensagem');
let amigos = [];

let lista = document.getElementById('listaAmigos');
lista.innerHTML = '';
for (let i = 0; i < amigos.length; i++) {
  let item = document.createElement('li')
}
// adicionar nome na lista clicando em "adicionar" usando a funcao ja declarado no botao onclick="adicionarAmigo()"
function adicionarAmigo() {
  let campoNome = document.getElementById('amigo')
  let nome = campoNome.value.toUpperCase();
  
  // condição para informar se o nome duplicado ou se nao foi inserio nome
  if (nome === ''){
    spanMensagem.innerText = 'Por favor, insira um nome.';
    return;
}
    if (amigos.includes(nome)) {
      spanMensagem.innerHTML = `O Nome: <strong>${nome}</strong> já foi adicionado, insira outro nome diferente.`;
        return
    }

  amigos.push(nome)
  AtualizarLista();
  campoNome.value = '';
  spanMensagem.innerText = '';
}
// inserir nome numa lista no HTML para exibir na tela o nome adicionado
function AtualizarLista() {
  let lista = document.getElementById('listaAmigos')
  lista.innerHTML = '';
  amigos.forEach(function (nome) {
    lista.innerHTML += `<strong><li>${nome}</li></strong>`
  })
}
AtualizarLista();
// função sortearAmigo() ira sortear um nome recebido da lista de maneira aleatoria ao clicar o botão
function sortearAmigo() {
  if (amigos.length === 0) {
    lista.innerHTML = 'A lista de amigos esta vazia! Adicione um nome para sortear';
    return;
  }
  let amigosAleatorios = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[amigosAleatorios];
  document.getElementById("resultado").innerHTML = `🎉 O amigo secreto é: <strong>${amigoSorteado}</strong> 🎉`;
  //Ao sortear o amigo o nome e deletado da lista para nao ser sorteado novamente.
  amigos.splice(amigosAleatorios, 1);

  AtualizarLista();
}
function limparListas() {
  document.querySelector('#listaAmigos').innerHTML = "";
  document.querySelector('#resultado').innerHTML = "";
}
function novoSorteio() {
  limparListas();
  amigos = [];
  spanMensagem.innerText = '';
}




