 /* aula 3
alert(' Seja Bem Vindo!!!');

document.write('Nossa primeira aula JS');
document.querySelector('#h2').textContent = 'Terceiro teste'; */

/* exemplo de como exibir caixa dialogo

const nome = prompt('Qual é seu nome?');

alert('Que bom ter você aqui ${nome}! \n Vamos começar?'); */

/*Aula 4

function bemVindo(){
    const nome = document.querySelector('#nomeUsuario').value;
    alert(`Olá  ${nome} Seja bem-vindo!`);
    document.getElementById('formularioLogin').style.display = 'none';
} 

function mudaCorFundo(){
  const menu = document.querySelector ('#coresFundo') 
  const cor = menu.options[menu.selectedIndex].value;
  document.body.style.background = cor;
} */

 /*

 let x;

x = 10;

console.log(x); */

/* let primeiroNome = 'Carlos';
let segundoNome = 'Silva';

console.log(primeiroNome+segundoNome);

let a=10;
let b=20;
let soma=(a+b)

console.log(soma); */

/*declarando a função
function exibirMensagem(){
  alert(' Hello word ');

}
//invocando a função
exibirMensagem(); */


/*function exibirMensagem(primeiroNome, segundoNome){
  alert(`Olá ${primeiroNome} ${segundoNome} , seja bem vinda!!! `);

}
exibirMensagem(`Ana`, `Silva`); 

function mediaAritimetica(a,b) {
  return  (a + b) / 2;
  //escopo da função
}

let resultado = mediaAritimetica(10,5);

console.log(resultado); */

/*const gravidade = 9.8;
console.log(gravidade);

function quedaLivre(tempo) {
  return gravidade * tempo;
 
}

console.log(quedaLivre(30));*/

/*function calculaKmMilha(){
  let km = document.querySelector(`#valorkm`).value;
  document.querySelector(`#resultado`).textContent = km * 1,609;
}

console.log(km); */