var page = window.pageYOffset;
var navbar = document.querySelector('.headerItems')
console.log(page)
window.addEventListener('scroll', function(){
if (pageYOffset >= 1) {
    navbar.classList.add('fixed')
} else if (navbar.classList.contains('fixed')) {
    navbar.classList.remove('fixed')

}
})