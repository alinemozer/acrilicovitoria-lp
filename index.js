const menu = document.getElementById('menu');
const menuList = document.querySelectorAll('li');
const menuActive = document.querySelector('.mobile-btn');
const nav = document.getElementById('nav');
const logoClientes = document.querySelectorAll('.logo-painel')
const painelClienteImagemLogo = document.querySelector('.painel')

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

logoClientes.forEach( (item, index) => {
    item.addEventListener('click', function(){
       painelClienteImagemLogo.src = `./src/images/cliente${index}.jpeg`
    })
});

ScrollReveal().reveal('.logo', { delay: 300 });
ScrollReveal().reveal('.paragrafo', { delay: 600 });
ScrollReveal().reveal('.fa-arrow-down', { delay: 900 });
ScrollReveal().reveal('.logo-clientes', { delay: 300 });
ScrollReveal().reveal('.paineis', { delay: 600 });
ScrollReveal().reveal('.produto', { delay: 500 });
