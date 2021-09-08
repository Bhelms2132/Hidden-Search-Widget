//---Variable
const search = document.querySelector('.search')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

//---Event Listners
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})