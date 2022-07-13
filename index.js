const menu = document.getElementById('menu')
const menuList = document.querySelectorAll('li')
const menuActive = document.querySelector('.mobile-btn')
const nav = document.getElementById('nav')

function toggleMenu(){
    nav.classList.toggle('ativo')
    menuActive.classList.toggle('ativo')
}

function closeMenuAfterClickedALink(){
    menuList.forEach( (item) =>{
        item.addEventListener('click', () => {
           nav.classList.remove('ativo')
            menuActive.classList.remove('ativo')
        })
    })   
}

menu.addEventListener('click', toggleMenu)

closeMenuAfterClickedALink()