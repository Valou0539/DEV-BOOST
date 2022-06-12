const body = document.querySelector('body')
const moonButtons = document.querySelectorAll('.moon')
const sunButtons = document.querySelectorAll('.sun')

moonButtons.forEach(moonButton => moonButton.addEventListener('click', e => {
    if ((body.classList[0] === 'light_theme') === true) {
        body.classList.remove('light_theme')
    }
    if ((body.classList[0] === 'dark_theme') === false) {
        body.classList.add('dark_theme')
    }
}))

sunButtons.forEach(sunButton => sunButton.addEventListener('click', e => {
    if ((body.classList[0] === 'dark_theme') === true) {
        body.classList.remove('dark_theme')
    }
    if ((body.classList[0] === 'light_theme') === false) {
        body.classList.add('light_theme')
    }
}))
