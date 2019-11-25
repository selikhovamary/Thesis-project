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
  