
const searchs = document.querySelector('.search')
const btns = document.querySelector('.btn')
const input = document.querySelector('.input')


searchs.addEventListener('click', () => {
    searchs.classList.toggle('active')
    input.focus();

})