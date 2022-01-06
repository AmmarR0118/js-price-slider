var slide = document.querySelector('.slidepage')
var btn2 = document.querySelector('.btn-2')
var btn1 = document.querySelector('.btn-1')
var btn3 = document.querySelector('.btn-3')

var current = 1;
btn2.addEventListener('click', function() {
    slide.style.marginLeft = '-100%'
    btn2.classList.add('clicked')
    btn1.classList.remove('clicked')
    btn3.classList.remove('clicked')
    current +=1;
})
btn1.addEventListener('click', function() {
    slide.style.marginLeft = '0%'
    btn1.classList.add('clicked')
    btn2.classList.remove('clicked')
    btn3.classList.remove('clicked')
})   
btn3.addEventListener('click', function() {
    slide.style.marginLeft = '-200%'
    btn3.classList.add('clicked')
    btn1.classList.remove('clicked')
    btn2.classList.remove('clicked')
})  

window.onload = function() {
    document.querySelector('.btn-2').click();
}