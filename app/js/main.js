if (document.readyState === 'loading') {

    document.addEventListener("DOMContentLoaded", function(event) {
        const posterSwiper = new Swiper('.poster-swiper', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.poster-swiper__btn_dir_next',
                prevEl: '.poster-swiper__btn_dir_prev'
            },
        });
    
        const performancesSwiper = new Swiper('.performances__swiper', {
            slidesPerView: 'auto',
            loop: true,
            mousewheel: {
                sensitivity: 1,
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            }
        });

        function closeModalWindow() {
            aside.classList.remove('modal-nav_state_active');
        }

        function openModalWindow() {
            aside.classList.add('modal-nav_state_active');
        }
    
        let aside = document.querySelector('.modal-nav');
        let openBtn = document.querySelector('.header__menu-icon');
        let closeBtn = document.querySelector('.modal-nav__close-icon');
        openBtn.addEventListener('click', openModalWindow);
        closeBtn.addEventListener('click', closeModalWindow);
        aside.addEventListener('click', function(event) {
            if (event.target.classList.contains('menu__link')) {
                closeModalWindow();
              }
        });
    
        let lastScrollTop = window.innerHeight;
    
        window.addEventListener("scroll", function () {
    
            let offset = window.pageYOffset;
            let st = offset || document.documentElement.scrollTop;
    
            if (st <= 50) {
                document.querySelector(".header").classList.remove('header_view_hidden');
                document.querySelector(".header").classList.remove('header_view_fixed');
                closeModalWindow();
                return;
            }
    
            if (st > lastScrollTop) {
                document.querySelector(".header").classList.remove('header_view_fixed');
                document.querySelector(".header").classList.add('header_view_hidden');
                closeModalWindow();
            } else {
                document.querySelector(".header").classList.remove('header_view_hidden');
                document.querySelector(".header").classList.add('header_view_fixed');
                closeModalWindow();
            }
    
            lastScrollTop = st;
        }, false);
    
    
    });
} 






