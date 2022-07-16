const menu = document.getElementById('menu');
const menuList = document.querySelectorAll('li');
const menuActive = document.querySelector('.mobile-btn');
const nav = document.getElementById('nav');
const logoClientes = document.querySelectorAll('.logo-painel');
const painelClienteImagemLogo = document.querySelector('.painel');

function toggleMenu() {
    nav.classList.toggle('ativo')
    menuActive.classList.toggle('ativo')
};

function fecharMenuAposClique() {
    menuList.forEach( (item) => {
       
        item.addEventListener('click', () => {
           
            menuList.forEach((elem) =>{
                if (elem.lastElementChild.classList.contains('selecionado')){
                    elem.lastElementChild.classList.remove('selecionado')
                }
            });
            item.lastElementChild.classList.add('selecionado')
            nav.classList.remove('ativo')
            menuActive.classList.remove('ativo')
        });    
    });  
};

menu.addEventListener('click', toggleMenu);
fecharMenuAposClique();

logoClientes.forEach( (item, index) => {
    item.addEventListener('click', function(){
        setTimeout(() => {
            painelClienteImagemLogo.classList.add('transparente') 
        }, 100)
        setTimeout(() =>{
            painelClienteImagemLogo.src = `./src/images/cliente${index}.jpeg`
            painelClienteImagemLogo.classList.remove('transparente') 
        }, 450)
    })
});

ScrollReveal().reveal('.logo-cinza', { delay: 300 });
ScrollReveal().reveal('.paragrafo', { delay: 500 });
ScrollReveal().reveal('.fa-arrow-down', { delay: 800 });
ScrollReveal().reveal('.logo-clientes', { delay: 300 });
ScrollReveal().reveal('.paineis', { delay: 500 });
ScrollReveal().reveal('.produto', { delay: 500 });
