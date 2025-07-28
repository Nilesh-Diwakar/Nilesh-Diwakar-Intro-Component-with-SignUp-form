const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const submitBtn = document.querySelector('#submit-btn')
const errorMsgs = document.querySelectorAll('.error-msg')
const errorIcons = document.querySelectorAll('.error-icon')

const noErrorClass = "p-2 placeholder:text-base rounded-md text-lg font-bold outline-none border-1 border-gray-300 focus:border-black"

const ErrorClass = "p-2 placeholder:text-base rounded-md text-lg font-bold outline-none border-2 border-red-400"


function SubmitHandler(){

    if(firstName.value ==''){
        firstName.placeholder= ''
        errorIcons[0].classList.remove('hidden')
        errorMsgs[0].classList.remove('hidden')
        firstName.classList = ErrorClass
    }
    if(lastName.value ==''){
        lastName.placeholder= ''
        errorIcons[1].classList.remove('hidden')
        errorMsgs[1].classList.remove('hidden')
        lastName.classList = ErrorClass
    }
    if(email.value ==''){
        email.placeholder= 'email@example/com'
        errorIcons[2].classList.remove('hidden')
        errorMsgs[2].classList.remove('hidden')
        email.classList = ErrorClass
        email.classList.add('placeholder:text-red-300')
    }
    if(password.value ==''){
        password.placeholder= ''
        errorIcons[3].classList.remove('hidden')
        errorMsgs[3].classList.remove('hidden')
        password.classList = ErrorClass
    }
}



// event listners
submitBtn.addEventListener('click', ()=> {
    SubmitHandler()
})

firstName.addEventListener('input', () => {
    firstName.classList = noErrorClass

    errorIcons[0].classList.add('hidden')
    errorMsgs[0].classList.add('hidden')
})

lastName.addEventListener('input', () => {
    lastName.classList = noErrorClass

    errorIcons[1].classList.add('hidden')
    errorMsgs[1].classList.add('hidden')
})
email.addEventListener('input', () => {
    email.classList = noErrorClass

    errorIcons[2].classList.add('hidden')
    errorMsgs[2].classList.add('hidden')
})

password.addEventListener('input', () => {
    password.classList = noErrorClass

    errorIcons[3].classList.add('hidden')
    errorMsgs[3].classList.add('hidden')
})
