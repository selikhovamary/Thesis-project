var navbar = document.querySelector('.headerItems')
var navbarUl = document.querySelector('.headerNavbar');
var categories = document.querySelector('.photoCategories')
var sectionPic = document.querySelectorAll('.section__pic')


window.addEventListener('scroll', function(){
if (pageYOffset >= 10) {
    navbar.classList.add('bg','border');
    navbarUl.classList.remove('border')
} else if (navbar.classList.contains('bg')) {
    navbar.classList.remove('bg', 'border');
    navbarUl.classList.add('border')

}
})

for (i = 0; i < sectionPic.length; i++){
sectionPic[i].addEventListener('mouseover', function(){
var pic = this.querySelector('.gallery__pic')
pic.classList.add('opacityImg')  
var link = this.querySelector('.categoryLink');
link.classList.remove('hidden');
link.classList.remove('opacity');

 });
 sectionPic[i].addEventListener('mouseout', function(){
    var pic = this.querySelector('.gallery__pic')
pic.classList.remove('opacityImg')     
var link = this.querySelector('.categoryLink');
link.classList.add('opacity');


})
}