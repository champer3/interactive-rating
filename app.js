const ratings = document.querySelectorAll("li")
const submit = document.querySelector('button')
const container = document.querySelector(".container")
const thankYou = document.querySelector(".thank-you")
const rate = document.querySelector(".rate p i")


ratings.forEach(rating =>{
    rating.addEventListener("click", function(e){
        rating.classList.toggle('active')
        rate.innerText = e.target.innerText
    })
})

submit.addEventListener("click", function(){
    // window.location.href="http:indez1.html"
    container.style.display = "none"
    thankYou.style.display = "flex"
})