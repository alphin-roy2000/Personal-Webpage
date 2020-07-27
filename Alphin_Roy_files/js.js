var x = 'True';
(function() {
    'use strict';
    $('.burger').click(function (e) {
        e.preventDefault();
        
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.menu-overlay').fadeToggle( 'slow', 'linear' );
            $('.topnav').toggleClass('navopen')
            $('.ar-below-line').toggleClass('navopen')
            $('.logo-nav-display').toggleClass('navopen')
            $('.burger-display').toggleClass('navopen')
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        } else {
            
            $(this).addClass('active');
            $('.menu-overlay').fadeToggle( 'slow', 'linear' );
            $('.topnav').toggleClass('navopen')
            $('.ar-below-line').toggleClass('navopen')
            $('.logo-nav-display').toggleClass('navopen')
            $('.burger-display').toggleClass('navopen')
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        }
    })
})();
var x = 'True';
(function() {
    'use strict';
    $('.topnav li a').click(function (e) {
        
        
        if ($('.burger').hasClass('open')){
            $('.burger').removeClass('open');
            $('.burger').removeClass('active');
            $('.menu-overlay').fadeToggle( 'slow', 'linear' );
            $('.topnav').toggleClass('navopen')
            $('.ar-below-line').toggleClass('navopen')
            $('.logo-nav-display').toggleClass('navopen')
            $('.burger-display').toggleClass('navopen')
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect')
           ;
        }
    })
})();
// $(window).resize(function(){
// 	if ($(window).width() >= 1153){	
// 		if ($('.burger').hasClass('active')){
//             $('.burger').removeClass('active');
//             $('.burger').removeClass('open');
//             $('.menu-overlay').fadeToggle( 'fast', 'linear' );
//             $('.topnav').slideToggle( 'fast');
//             $('.logo-nav-display').slideToggle( 'easeInExpo' );
//             $('.hamburger-menu-wrapper').toggleClass('bounce-effect');

//         }
// 	}	
// });
  
// (function() {
//     'use strict';
//     $('.hamburger-menu').click(function (e) {
//         e.preventDefault();
//         if ($(this).hasClass('active')){
//             $(this).removeClass('active');
//             $('.menu-overlay').fadeToggle( 'fast', 'linear' );
//             $('.menu-list').slideToggle( 'slow', 'swing' );
//             $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
//         } else {
//             $(this).addClass('active');
//             $('.menu-overlay').fadeToggle( 'fast', 'linear' );
//             $(' .menu-list').slideToggle( 'slow', 'swing' );
//             $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
//         }
//     })
// })();

                // var swiper = new Swiper('.swiper-container', {
                //   effect: 'coverflow',
                //   grabCursor: true,
                //   centeredSlides: true,
                //   slidesPerView: 'auto',
                //   coverflowEffect: {
                //     rotate: 50,
                //     stretch: 0,
                //     depth: 100,
                //     modifier: 1,
                //     slideShadows : true,
                //   },
                //   pagination: {
                //     el: '.swiper-pagination',
                //   },
                // });
                // mybutton = document.getElementById("myBtn");

                // // When the user scrolls down 20px from the top of the document, show the button
                // window.onscroll = function() {scrollFunction()};
                
                // function scrollFunction() {
                //   if (document.body.scrollTop > 1000|| document.documentElement.scrollTop > 1000) {
                //     mybutton.style.display = "block";
                //   } else {
                //     mybutton.style.display = "none";
                //   }
                // }
                
                // // When the user clicks on the button, scroll to the top of the document
                // function topFunction() {
                //   document.body.scrollTop = 709; // For Safari
                //   document.documentElement.scrollTop = 709; // For Chrome, Firefox, IE and Opera
                // }
                $(".option").click(function(){
                    $(".option").removeClass("active");
                    $(this).addClass("active");
                    
                 });