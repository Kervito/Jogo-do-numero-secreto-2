//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do numero secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um numero entre 1 e 10";
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do numero secreto");
  exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;
  //console.log(chute == numeroSecreto);

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "acertou");
    let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `voce descobriu o numero secreto em ${tentativa} ${palavraTentativa}!`;
    "p", mensagemTentativas;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O numero secreto é menor");
    } else {
      exibirTextoNaTela("p", "O numero é maior");
    }
    //tentativa = tentativa + 1;
    tentativa++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}
function limparCampo() {
  chute = document.querySelector("input");
  chute.value = " ";
}
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativa = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
