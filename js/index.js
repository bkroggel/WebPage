
$(document).ready(function(){

//animated header
  
  var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
      header = document.querySelector( '.cbp-af-header' ),
      didScroll = false,
      changeHeaderOn = 300;

    function init() {
      window.addEventListener( 'scroll', function( event ) {
        if( !didScroll ) {
          didScroll = true;
          setTimeout( scrollPage, 250 );
        }
      }, false );
    }

    function scrollPage() {
      var sy = scrollY();
      if ( sy >= changeHeaderOn ) {
        classie.add( header, 'cbp-af-header-shrink' );
      }
      else {
        classie.remove( header, 'cbp-af-header-shrink' );
      }
      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }

    init();

  })();

//slideout menu
    var slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      'padding': 256,
      'tolerance': 70
    });

    document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
      slideout.toggle();
    });

    document.querySelector('.js-slideout-close').
      addEventListener('click', function() {
      slideout.close();
    });

    document.querySelector('.js-slideout-close-section_1').
      addEventListener('click', function() {
      slideout.close();
    });

    document.querySelector('.js-slideout-close-section_2').
      addEventListener('click', function() {
      slideout.close();
    });

    //scroll effect on navigation bar (not mobile)
    var $root = $('html, body');
        $('.nav a').click(function() {
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href;
            });
            return false;
        });

    //Owl Carousel
    $(document).ready(function() {
     
      $("#owl-demo").owlCarousel({
     
          autoPlay: 5000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
      });
    });

  // end document ready
});