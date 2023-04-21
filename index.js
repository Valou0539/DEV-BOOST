let Input = class Input {

    constructor (inputDivClass) {
        this.input = document.querySelector(`.${inputDivClass} .content_input`)
        this.label = document.querySelector(`.${inputDivClass} label`)
        this.input.addEventListener('input', () => {
            if (this.input.value.trim() !== '') {
                this.label.classList.add('active')
            } else {
                this.label.classList.remove('active')
            }
        })
    }

}

const nameInput = new Input('name')
const emailInput = new Input('email')
const messageInput = new Input('message')



const textArea = document.querySelector('#message')

const getContactItemsHeight = function () {
    return document.querySelector('#contact h2').offsetHeight + document.querySelector('#contact p').offsetHeight + document.querySelector('#contact form').offsetHeight - textArea.offsetHeight
}

const resizeTextArea = function () {
    if (window.innerWidth > 1000) {
        textArea.style.height = ''
        let contactHeight = document.querySelector('#contact').offsetHeight
        let contactItemsHeight = getContactItemsHeight()
        textArea.style.height = `${contactHeight - contactItemsHeight - 130}px`   
    } else {
        textArea.style.height = '400px'
    }
    
}

window.addEventListener('load', resizeTextArea)

window.addEventListener('resize', resizeTextArea) 