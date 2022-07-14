const menu = document.getElementById('menu');
const menuList = document.querySelectorAll('li');
const menuActive = document.querySelector('.mobile-btn');
const nav = document.getElementById('nav');

function toggleMenu() {
    nav.classList.toggle('ativo')
    menuActive.classList.toggle('ativo')
};

function fecharMenuAposClique() {
    menuList.forEach( (item) => {
        item.addEventListener('click', () => {
           nav.classList.remove('ativo')
            menuActive.classList.remove('ativo')
        });
    });  
};

menu.addEventListener('click', toggleMenu);
fecharMenuAposClique();

const setaVoltar = document.querySelector('.seta-esquerda');
const setaAvancar = document.querySelector('.seta-direita');
const imagensPainel = document.querySelectorAll('.painel');
let painelAtual = 0;
let painelAnterior = 0;

setaAvancar.addEventListener('click', () => {
    painelAnterior = painelAtual;
    painelAtual ++;

    mostrarPainel();
    esconderPainel();
    desabilitarSeta();
});

setaVoltar.addEventListener('click', () => {
    painelAnterior = painelAtual;
    painelAtual --;

    mostrarPainel();
    esconderPainel();
    desabilitarSeta();
});

function mostrarPainel() {
    imagensPainel[painelAtual].classList.add('mostrar');
}

function esconderPainel() {
    imagensPainel[painelAnterior].classList.remove('mostrar');
}

function desabilitarSeta() {
    const primeiroPainel = 0;
    const ultimoPainel = imagensPainel.length -1;
    
    painelAtual === primeiroPainel ? setaVoltar.classList.add('seta-desabilitada') : setaVoltar.classList.remove('seta-desabilitada');

    painelAtual === ultimoPainel ? setaAvancar.classList.add('seta-desabilitada') : setaAvancar.classList.remove('seta-desabilitada');
}