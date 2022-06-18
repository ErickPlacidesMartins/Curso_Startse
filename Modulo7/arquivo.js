 /* aula 3
alert(' Seja Bem Vindo!!!');

document.write('Nossa primeira aula JS');
document.querySelector('#h2').textContent = 'Terceiro teste'; */

/* exemplo de como exibir caixa dialogo

const nome = prompt('Qual é seu nome?');

alert('Que bom ter você aqui ${nome}! \n Vamos começar?'); */

/*Aula 4*/

function bemVindo(){
    const nome = document.querySelector('#nomeUsuario').value;
    alert(`Olá  ${nome} Seja bem-vindo!`);
    document.getElementById('formularioLogin').style.display = 'none';
} 

function mudaCorFundo(){
  const menu = document.querySelector ('#coresFundo') 
  const cor = menu.options[menu.selectedIndex].value;
  document.body.style.background = cor;
} 

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

// condicionais If = Se ou else = Se não

let nota1 = 5;
let nota2 = 8;

function media( n1,n2){
  return(n1,n2)/2;
}

let resultado  = media(nota1, nota2);

if(resultado >= 6) {
  console.log(` Aprovado com média ${resultado}.`);
} else if(resultado >= 4) {
  console.log(` Recuperação com média ${resultado}.`);
} else {
  console.log(` Reprovado com média ${resultado}.`);
} 

// Operador Ternario

let Nota1 = 5;
let Nota2 = 8;

function media( N1,N2){
  return(N1,N2)/2;
}

let Resultado  = media(Nota1, Nota2);

let situacão = Resultado >= 6 ? 'Aprovado' : 'Reprovado';

console.log(situacão);

//Ou podemos usar 

/* let situacão = (resultado >= 6) ? `Aprovado com média ${resultado}` ; 
                  (resultado >= 4) ? `Recuperação com média ${resultado}` ;
                                     `Reprovado com a média ${resultado}` ;
*/


   /* Laços de Repeticão  Loops  FOR = para */

   const listaNumeros = [23,45,12,89];

   for(let i = 0; i < listaNumeros.length; i++) {
    console.log(listaNumeros[i]);

   } 

   const operacoes = ['soma','Subtração','Multiplicação','Divisão'];

   function montaTextoDaLista() {
    let textoDaLista = '';
    for( let i=0; i < operacoes.length; i++ ) {
      textoDaLista += '<li>' + operacoes[i] + '</li>';
    }
    return textoDaLista;

   }

   document.querySelector('#listaOperacoes').innerHTML = montaTextoDaLista();


   let jogadores = [
    {
      nome:'Beto',
      posição: 'atacante'
    },
    {
      nome:'Gil',
      posição: 'Zagueiro'
    },
    {
      nome:'Milton',
      posição: 'Volante'
    },
   ];

   for(let jogador of jogadores) {
    console.log(jogador.nome);
   }


   /* While = Enquanto
   const operacao = ['soma','Subtração','Multiplicação','Divisão'];

   let i=0;
   while(i < operacao.length) {
    console.log(operacao[i]);
    i++;
   }
 */