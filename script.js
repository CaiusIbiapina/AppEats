
let pratoOk;
function ativarPratoSelecionado(pedido) {

    const botaoSelecionado = document.querySelector('.prato .selecionado');
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    let pedidoEscolhido = document.querySelector(pedido);
    pedidoEscolhido.classList.add('selecionado');

    pratoOk = true;
}

let bebidaOk;
function ativarBebidaSelecionada(bebida) {

    const botaoSelecionado = document.querySelector('.bebida .selecionado');
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    let pedidoEscolhido = document.querySelector(bebida);
    pedidoEscolhido.classList.add('selecionado');

    bebidaOk = true;

}

let sobremesaOk;

function ativarSobremesaSelecionada(sobremesa) {

    const botaoSelecionado = document.querySelector('.sobremesa .selecionado');
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    let pedidoEscolhido = document.querySelector(sobremesa);
    pedidoEscolhido.classList.add('selecionado'); 

    sobremesaOk = true;
    
}

function fecharPedido() {

    if (pratoOk === true, bebidaOk === true, sobremesaOk === true) {
        let classeEscolhida = document.querySelector('.fechar-pedido');
        classeEscolhida.classList.remove('fechar-pedido');
        classeEscolhida.classList.add('pedidos-escolhidos');
    }
    
    
}