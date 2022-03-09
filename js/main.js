// burrger header start

const burger  = document.querySelector('.open')
      closeMenu  = document.querySelector('.menu-close');
      menu = document.querySelector('.menu-burger');
      menuLinks = document.querySelectorAll('.menu-burger_link');

      burger.addEventListener('click', () => {
        menu.classList.remove('menu-burger_active');
        console.log('menu')
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.add('menu-burger_active');
        console.log('close')
    });

    if (window.innerWidth <= 1920) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.add('menu-burger_active');
            });
        }
    }


    (function () {

        const smoothScroll = function (targetEl, duration) {
            let target = document.querySelector(targetEl);
            let targetPosition = target.getBoundingClientRect().top ;
            let startPosition = window.pageYOffset;
            let startTime = null;
        
            const ease = function(t,b,c,d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };
        
            const animation = function(currentTime){
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, targetPosition, duration);
                window.scrollTo(0,run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };
            requestAnimationFrame(animation);
    
        };
    
        const scrollTo = function () {
            const links = document.querySelectorAll('.js-scroll');
            links.forEach(each => {
                each.addEventListener('click', function () {
                    const currentTarget = this.getAttribute('href');
                    smoothScroll(currentTarget, 1000);
                });
            });
        };
        scrollTo();
    }());

// burger header end

// carouselfor requsit start

const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
// carouselfor requsit end



// carousel for production start
$('.production-carousel').owlCarousel({
  loop:true,
  margin: 22,
  nav:true,
  navText:['<img src="img/svg/left.svg" alt="left" class="left">','<img src="img/svg/right.svg" alt="right" class="right">'],
  dots:false,
  responsive:{
      0:{
          items:2
      },
      294:{
          items:2
      },
      368:{
          items:4
      },
      1000:{
          items:6
      }
  }
})
// carousel for production end


// partners carousel satrt
$('.partners-carousel').owlCarousel({
    loop:true,
    margin: 22,
    nav:true,
    navText:['<img src="img/svg/left.svg" alt="left" class="left">','<img src="img/svg/right.svg" alt="right" class="right">'],
    dots:false,
    responsive:{
        0:{
            items:2
        },
        294:{
            items:3
        },
        368:{
            items:4
        },
        1000:{
            items:5
        }
    }
  })
// partners carousel end


