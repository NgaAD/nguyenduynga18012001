//  hiển thị menu
const menu = document.querySelector('.navbar__links')
const menuBtn = document.querySelector('.navbar__icons')
const header = document.querySelector('.header')


menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('navbar__open')
    menuBtn.classList.toggle('open')
})
window.addEventListener('scroll', ()=> {
    header.classList.toggle('sticky', window.scrollY > 0)
})