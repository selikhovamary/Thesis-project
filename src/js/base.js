var navbar = document.querySelector('.headerItems')
var navbarUl = document.querySelector('.headerNavbar');
var sectionPic = document.querySelectorAll('.photoCategories .section__pic')
var burgerButton = document.querySelector('.burger')
var burgerMenu = document.querySelector('.burgerMenu')

window.addEventListener('scroll', function () {
  if (pageYOffset >= 10) {
    navbar.classList.add('bg', 'border', 'fixed');
    navbarUl.classList.remove('border')
  } else if (navbar.classList.contains('bg')) {
    navbar.classList.remove('bg', 'border', 'fixed');
    navbarUl.classList.add('border')

  }
})

for (i = 0; i < sectionPic.length; i++) {
  sectionPic[i].addEventListener('mouseover', function () {
    var pic = this.querySelector('.gallery__pic')
    pic.classList.add('opacityImg')
    var link = this.querySelector('.categoryLink');
    link.classList.remove('hidden');
    link.classList.remove('opacity');

  });
  sectionPic[i].addEventListener('mouseout', function () {
    var pic = this.querySelector('.gallery__pic')
    pic.classList.remove('opacityImg')
    var link = this.querySelector('.categoryLink');
    link.classList.add('opacity');
    link.addEventListener('transitionend', function () {
      if (link.classList.contains('opacity')) {
        link.classList.add('hidden');
      }
    })
  })
}
// to top button
(function () {
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
burgerButton.addEventListener('click', function () {
  burgerButton.classList.toggle('transform')
  burgerMenu.classList.toggle('hidden')
  setTimeout(function () {
    burgerMenu.classList.toggle('opacity')
  }, 100);
})

// owl-carousel

$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 4.5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2.5,
      },
      320: {
        items: 3.5,
      },
      765: {
        items: 4.5
      }
    }
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })
});

// questions
var question = document.querySelectorAll('.glyphicon');
for (i = 0; i < question.length; i++) {
  question[i].addEventListener('click', showAnswer);

  function showAnswer() {
    var answer = this.parentElement.querySelector('.answer');
    if (!(answer.classList.contains('hidden'))) {
      answer.classList.add('hidden')
    }
    this.classList.toggle('rotateIcon')
    this.parentElement.classList.toggle('quesHeight')
    this.parentElement.addEventListener('transitionend', function () {
      if (this.classList.contains('quesHeight')) {
        answer.classList.remove('hidden');
      }
    })
  }
}