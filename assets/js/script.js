const form = document.querySelector('#form')
const inputs = document.querySelectorAll('.input-form')
const spans = document.querySelectorAll('.error-form')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const hasError = Array.from(inputs).some(input => {
        const hasErrorStyle = input.nextElementSibling.classList.contains('error-form') && input.nextElementSibling.style.display === 'block'
        const emptyInput = input.value.trim() === ''
        return hasErrorStyle || emptyInput
    })

    if (hasError) {
        alert('Preencha os campos corretamente.')
    }   else {
        form.submit()
    }
})

function setError(index) {
    inputs[index].style.border = '2px solid #e63636'
    spans[index].style.display = 'block'
}

function removeError(index) {
    inputs[index].style.border = 'none'
    spans[index].style.display = 'none'
}

function validateUsername() {
    if (inputs[0].value.length < 6) {
        setError(0)
    }   else {
        removeError(0)
    }
}

function emailValidate() {
    if (!emailRegex.test(inputs[1].value)) {
        setError(1)
    }   else {
        removeError(1)
    }
}

function passwordValidate() {
    if (inputs[2].value.length < 8) {
        setError(2)
    }   else {
        removeError(2)
    }
}

function passwordConfirmValidate() {
    if (inputs[3].value !== inputs[2].value) {
        setError(3)
    }   else {
        removeError(3)
    }
}