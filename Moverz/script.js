const backDrop = document.querySelector('.popup');
const signup = document.querySelector('.signup')
const btnSignup = document.querySelector('.btn_signup')
const cancelBtn = document.getElementById('btn_cancel')
// const displayMenu = document.querySelector('.hamburg')
// const menu = document.querySelector('header nav ul li')
const signIn= document.querySelector('.sign_in')
const displaySignIn = document.querySelector('.popup.sign_inForm')
const displayregistered = document.querySelector('.popup a')
const removeSignup = document.querySelector('.popup_signup')
console.log(removeSignup)


// backDrop.addEventListener('cliick', function(){
//     backDrop.classList.remove('visible')
// })

signup.addEventListener('click', function(){
    backDrop.classList.add('visible')
})

btnSignup.addEventListener('click', function(){
    backDrop.classList.remove('visible')
})

cancelBtn.addEventListener('click', function(){
    backDrop.classList.remove('visible')


})

// displayMenu.addEventListener('click', function(){
//     menu.classList.toggle('menuvisible')
// })

signIn.addEventListener('click', function(e){
    e.preventDefault()
    displaySignIn.classList.toggle('visible')

})

// displayregistered.addEventListener('click', function(e){
//     e.preventDefault()
//     displaySignIn.classList.toggle('visible')
//     removeSignup.classList.add('pop_signup')

// })