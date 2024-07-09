let listaNumerosSorteados = [];
let numerLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirMensagemInicial();

function verificarChute() {
    let chute =  document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
      exibirTextoNaTela('h1', 'Acertou!');           
      let palavraTentativa = tentativas > 1 ? 'Tentativas': 'Tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
          exibirTextoNaTela('h1', 'Errou! Tente de novo');
          exibirTextoNaTela('p', `O número secreto é menor.`);
        }
        else {            
          exibirTextoNaTela('h1', 'Errou! Tente de novo');
          exibirTextoNaTela('p', `O número secreto é maior.`);
        }
        tentativas++;
        limparCampo();
    }
    }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numerLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numerLimite) {
      listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
    } else {
      listaNumerosSorteados.push(numeroEscolhido);
      console.log(listaNumerosSorteados);
      return numeroEscolhido;
    }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}



/* function calcularMedia(nota1, nota2, nota3, nota4) {
  let media = (nota1+nota2+nota3+nota4) / 4;
  return media;
}

function verificarAprovado(media) {
  return media >= 5 ? "Aprovado" : "Reprovado";
}

console.log(calcularMedia(7, 6, 3 ,5));
console.log(verificarAprovado()); */


/* function olaMundo() {
    console.log("Olá, mundo!");
  }
  
  olaMundo();

  function olaNome(nome) {
    console.log(`Olá, ${nome}!`);
  }
  
  olaNome("João");

  function dobrarNumero(numero) {
    return numero * 2;
  }
  
  console.log(dobrarNumero(5));

  function calcularMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
  }
  
  console.log(calcularMedia(4, 8, 12));

  function maiorNumero(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  console.log(maiorNumero(7, 10)); 

  function quadrado(numero) {
    return numero * numero;
  }
  
  console.log(quadrado(6)); */