/// Sidebar on right side
  $(".sidebar.right").sidebar({side: "right"});


$(document).ready(function(){

//animated header
  
  var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
      header = document.querySelector( '.cbp-af-header' ),
      register = document.querySelector( '.nav--register' ),
      didScroll = false,
      changeHeaderOn = 100;

    function init() {
      window.addEventListener( 'scroll', function( event ) {
        if( !didScroll ) {
          didScroll = true;
          setTimeout( scrollPage, 1 );
        }
      }, false );
    }

    function scrollPage() {
      var sy = scrollY();
      if ( sy >= changeHeaderOn ) {
        classie.add( header, 'cbp-af-header-shrink' );
        register.setAttribute("class", "nav--register-active");
      }
      else {
        classie.remove( header, 'cbp-af-header-shrink' );
        register.setAttribute("class", "nav--register");
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
      'tolerance': 70,
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
        $('.nav a, .header a, footer .columns--readmore a').click(function() {
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
          
          // navigation: true,
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
      });
    });

    // All sides
    var sides = ["left", "top", "right", "bottom"];
    $("h1 span.version").text($.fn.sidebar.version);

    // Initialize sidebars
    for (var i = 0; i < sides.length; ++i) {
        var cSide = sides[i];
        $(".sidebar." + cSide).sidebar({side: cSide});
    }

    // Click handlers
    $(".btn_toggle[data-action]").on("click", function () {
        var $this = $(this);
        var action = $this.attr("data-action");
        var side = $this.attr("data-side");
        $(".sidebar." + side).trigger("sidebar:" + action);
        return false;
    });

    $(document).bind('sidebar:open', function() {
        $('html').css({ overflow: 'hidden' });
    }).bind('sidebar:closed', function() {
        $('html').css({ overflow: '' });
    });
  // end document ready

  //prevents chrome mobile from jumping around because of the resize effect (just a workaround by far not perfect)
  //https://code.google.com/p/chromium/issues/detail?id=428132#c27
    var $header = $('.header');
    var h = window.innerHeight;
    $header.css('min-height', h);
});