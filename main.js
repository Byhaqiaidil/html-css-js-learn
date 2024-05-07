// image slider
var slidesCard = 0
showSlides(slidesCard)
 
function nextSlide(n){
showSlides(slidesCard += n)
}

function showSlides(n){
    var i
    var slides = document.getElementsByClassName("card");
    if(n > slides.length){
        slidesCard = 1
    }
    if(n < 1){
        slidesCard = slides.length
    }
    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = 'none'
    }
    slides[slidesCard - 1].style.display = 'block'
}

// alert button contact
function succes (){
    alert('sukses')
    form.reset()
}

// hamburger navbar
const strip = document.querySelector('.hamburger')
const navRes = document.getElementById("navRes");

strip.addEventListener('click', ()=>{
    navRes.classList.toggle('active')

})