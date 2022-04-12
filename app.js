const ratings = document.querySelectorAll("li")
const submit = document.querySelector('button')
const container = document.querySelector(".container")
const thankYou = document.querySelector(".thank-you")
const rate = document.querySelector(".rate p i")
console.log(rate)


ratings.forEach(rating =>{
    rating.addEventListener("click", function(){
        rating.classList.toggle('active')
    })
})

submit.addEventListener("click", function(){
    // window.location.href="http:indez1.html"
    container.style.display = "none"
})