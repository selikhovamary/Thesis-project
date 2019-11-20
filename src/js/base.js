var navbar = document.querySelector('.headerItems')
var navbarUl = document.querySelector('.headerNavbar');
var categories = document.querySelector('.photoCategories')
var sectionPic = document.querySelectorAll('.section__pic')


window.addEventListener('scroll', function(){
if (pageYOffset >= 10) {
    navbar.classList.add('bg','border', 'fixed');
    navbarUl.classList.remove('border')
} else if (navbar.classList.contains('bg')) {
    navbar.classList.remove('bg', 'border', 'fixed');
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
link.addEventListener('transitionend', function(){
    if (link.classList.contains('opacity')){
        link.classList.add('hidden');}
})
})
}
// to top button
(function() {
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
//hamb
