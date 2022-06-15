 /* aula 3
alert(' Seja Bem Vindo!!!');

document.write('Nossa primeira aula JS');
document.querySelector('#h2').textContent = 'Terceiro teste'; */

/* exemplo de como exibir caixa dialogo

const nome = prompt('Qual é seu nome?');

alert('Que bom ter você aqui ${nome}! \n Vamos começar?'); */

//Aula 4 

function bemVindo(){
    const nome = document.querySelector('#nomeUsuario').value;
    alert('Olá '   + (nome) +  ' Seja bem-vindo!');
    document.getElementById('formularioLogin').style.display = 'none';
} 

function mudaCorFundo(){
  const menu = document.querySelector (`#coresFundo`) 
  const cor = menu.options[menu.selectIndex].value;
  document.body.style.background = cor;
}