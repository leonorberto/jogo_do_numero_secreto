//let titulo = document.querySelector('h1')
//titulo = 'Bem vindo ao jogo do número secreto'

//let paragrafo = document.querySelector('p')
//paragrafo = 'Digite um numero de 1 a 10'

//add novos elementos a lista = frutas.push('item)
//remove = frutas.pop(1) <- item a remover
//consultar = console.log(frutas[0])


let listaDeNumeroSorteados = []
let NumeroLimite = 10
let numerosecreto = gerarNumeroAleatorio()
let tentativas = 1

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numerosecreto) {
        exibitTextoNaTela('h1', 'Parabéns, você acertou!')
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
        let msgTentativas = ('Você descobriu o número secreto com ' + tentativas + ' ' + palavraTentativas)
        exibitTextoNaTela('p', msgTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numerosecreto) {
            exibitTextoNaTela('p', 'O numero secreto é menor')
        } else{
            exibitTextoNaTela('p', 'O numero secreto é maior')
        } 
        tentativas = tentativas + 1
        limparCampo()
    } 
    
}



function exibitTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2})
}

function msgInicial() {
    exibitTextoNaTela('h1', 'Bem vindo ao jogo do número secreto')
    exibitTextoNaTela('p', 'Digite um numero de 1 a 10')
}

msgInicial()


function gerarNumeroAleatorio() {
    let NumeroEscolhido = parseInt(Math.random() * NumeroLimite + 1)
    let quantidadeElementoNaLista = listaDeNumeroSorteados.length

    if (quantidadeElementoNaLista == NumeroLimite) {
        listaDeNumeroSorteados = []
    }

    if (listaDeNumeroSorteados.includes(NumeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumeroSorteados.push(NumeroEscolhido)
        return NumeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value =''
}

function reiniciarJogo() {
    numerosecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    msgInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}