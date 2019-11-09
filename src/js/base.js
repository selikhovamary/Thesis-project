var navbar = document.querySelector('.headerItems')
window.addEventListener('scroll', function(){
if (pageYOffset >= 10) {
    navbar.classList.add('bg')
} else if (navbar.classList.contains('bg')) {
    navbar.classList.remove('bg')
}
})