const listaTarefas = document.querySelector('#listaTarefas');
const caixaTexto = document.querySelector('#caixaDeTexto');
const botaoAdicionar = document.querySelector('#botaoAdicionar');
const listaSuspensa = document.querySelector('#listaSuspensa');

botaoAdicionar.addEventListener('click', function() {
    const textoDaTarefa = caixaTexto.value;
    caixaTexto.value = '';
    listaTarefas.appendChild(adicionarTarefa(textoDaTarefa));
    exibeOcultaListaSuspensa();
    caixaTexto.focus();

});

function adicionarTarefa(textoDaTarefa) {
    const elementoLI = document.createElement('li');
    const elementoSpan = document.createElement('span');

    elementoSpan.setAttribute('id','tarefa');
    elementoSpan.textContent = textoDaTarefa;
    elementoLI.className = 'naoRealizada';


    elementoLI.appendChild(elementoSpan);
    elementoLI.appendChild(adicionaBotaoRemover());

    elementoSpan.addEventListener('click', function () {
        if(this.id === 'tarefa') {
            if(this.parentNode.className === 'naoRealizada') {
                this.parentNode.className = 'realizada'
            } else {
                this.parentNode.className = 'naoRealizada'
            }
        }
    });

    return elementoLI;
}

function adicionaBotaoRemover() {
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '✘';
    botaoRemover.className = 'remover';

    botaoRemover.addEventListener('click', function(){
        listaTarefas.removeChild(this.parentNode);
        exibeOcultaListaSuspensa();
      }
    );

    return botaoRemover;
}

function exibeOcultaListaSuspensa(){
    const elementoSpan = document.querySelector('#tarefa');
    if(elementoSpan === null) {
        listaSuspensa.setAttribute('hidden','hidden');
    } else {
        listaSuspensa.removeAttribute('hidden')
    }
}

listaSuspensa.addEventListener('change', function(){
    if(listaSuspensa.selectedIndex === 1 || listaSuspensa.selectedIndex ===2 ){
        const vetorTarefas = listaTarefas.querySelectorAll('#tarefa');
        for(tarefa of vetorTarefas) {
            tarefa.dispatchEvent(new Event('click'));
        }
    } else if(listaSuspensa.selectedIndex === 3) {
        const vetorBotoes = listaTarefas.querySelectorAll('.remover');
        for(botao of vetorBotoes) {
           botao.dispatchEvent(new Event('click'));
        }
    }
    

});