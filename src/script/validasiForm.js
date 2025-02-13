const form = document.querySelector('form')
const inputTitle = document.querySelector('#title')
const inputNote = document.querySelector('#isi')

form.addEventListener('submit', (event) => {
    event.preventDefault()
})

const customValidationUsernameHandler = (event) => {
    event.target.setCustomValidity('')

    if(event.target.validity.ValueMissing){
        event.target.setCustomValidity('Wajib di isi')
        return
    }
}

inputTitle.addEventListener('change', customValidationUsernameHandler);
inputTitle.addEventListener('invalid', customValidationUsernameHandler);
