alert("Boas vindas ao jogo do numero secreto");
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //let cria uma variavel;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
// se chute for igual ao numero secreto
while (chute != numeroSecreto) {
  // tag enquanto//
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  if (chute == numeroSecreto) {
    break;
  } else {
    alert("Tente novamente");
    if (chute > numeroSecreto) {
      alert(`O Numero secreto é menor que ${chute}`);
    } else {
      alert(`O Numero secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1
    tentativas++;
  }
}
let palavraTentativa = tentativas > 1 ? "tentivas" : "tentiva";
alert(
  `Parabens!! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas}  ${palavraTentativa}.`
);
//if (tentativas > 1) {
//alert(
//  `Parabens!! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} Tentativas`
//  );
//} else {
// alert(
//   `Parabens!! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} Tentativa`
//  );
//}
