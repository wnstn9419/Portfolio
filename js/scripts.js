/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        pagination: {
            el: '.blog-slider__pagination',
            clickable: true,
        },
        mousewheel: {
            invert: false,
        },
        slidesPerView: 1,
        autoHeight: true,
    });
  });

  
  let currentIndexes = [0, 0, 0, 0, 0, 0, 0, 0]; 

  function moveSlide(modalId, direction) {
      const modalIndex = parseInt(modalId.replace('project', '')) - 1;
      const slides = document.querySelector(`#${modalId} .slides`);
      const totalSlides = slides.children.length;
  
      currentIndexes[modalIndex] += direction;
      if (currentIndexes[modalIndex] < 0) {
          currentIndexes[modalIndex] = totalSlides - 1;
      } else if (currentIndexes[modalIndex] >= totalSlides) {
          currentIndexes[modalIndex] = 0;
      }
  
      const slideWidth = slides.children[0].clientWidth;
      slides.style.transform = `translateX(${-currentIndexes[modalIndex] * slideWidth}px)`;
  }