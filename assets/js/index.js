window.addEventListener("DOMContentLoaded", init);
function init() { 
    
    function menuSticky() { 
        let menuHeader = document.querySelector('.header-nav-wrapp'),
            headerHeigth = document.querySelector('.header_wrapper');
        window.addEventListener('scroll', () => {
            let offSetHead = headerHeigth.offsetHeight - menuHeader.offsetHeight
            if (pageYOffset >= offSetHead) {
                menuHeader.classList.add('fix-head');
            } else {
                if (menuHeader.classList.contains('fix-head')) {
                    menuHeader.classList.remove('fix-head');
                } else {
                    return;
                };
            };
        });   
    };
    function burgerLogic() { 
        let burger = document.querySelector('.burger-menu'),
            navMenu = document.querySelector('.header-nav');
        
        burger.addEventListener('click', function () {

            burger.classList.toggle('bgr-active');
            navMenu.classList.toggle('bgr-active');
        });
    };
    function PopUpLogic() { 
        let vBody = document.querySelector('body');
            popUpCall = document.querySelector('#popup_call'),
            popUpTranslate = document.querySelector('#popup_translate'),
            btnCall = document.querySelector('.btn-call'),
            popWrap = document.querySelector('.popup__wrapper'),
            btnTranslate = document.querySelector('.btn-translate'),
            img = document.querySelectorAll('.img-wrap > img'),
            popImg = document.querySelector('#popup_galerry');
        
        function openPopUp(elem) {
            let lockHead = document.querySelector('.header-nav-wrapp.fix-head');
            elem.style = 'opacity: 1; visibility: visible;';
            let withScroll = withScrollBar();
            vBody.classList.add('lock-scroll');
            vBody.style = `padding-right:${withScroll}px`;
            if (lockHead) {
                lockHead.style = `padding-right:${withScroll}px`;
            } else { return };
           
        };
        function withScrollBar() { 
            let wScroll = window.innerWidth - popWrap.offsetWidth;
            return wScroll;
        }
        function closePopUp(elem) {
            let lockHead = document.querySelector('.header-nav-wrapp.fix-head');
            elem.style = 'opacity: 0; visibility: hidden;';
            vBody.classList.remove('lock-scroll');
            
            vBody.style = `padding-right: 0px`;
            if (lockHead) {
                lockHead.style = `padding-right: 0px`;
            } else { 
            return
            }
        };
        function openImg(elem, e) {
            let lockHead = document.querySelector('.header-nav-wrapp.fix-head');
            elem.style = 'opacity: 1; visibility: visible;';
            elem.querySelector('img').setAttribute('src', e);
            let withScroll = withScrollBar();
            vBody.classList.add('lock-scroll');
            vBody.style = `padding-right:${withScroll}px`;
            if (lockHead) {
                lockHead.style = `padding-right:${withScroll}px`;
            } else { return };
           
        };
        function runOpen(btn, elem) { 
            btn.addEventListener('click', (e)=> {
            e.preventDefault();
                openPopUp(elem);        
       });
        };
        function runClose(elem) {
            elem.addEventListener('click', (e) => {
                if (e.target.className == 'popup__wrapper') {
                    closePopUp(elem);
                };
            });
        };
        function imgShow(img){
            currImg = img.target.getAttribute("src");
            return currImg;
        
        };
        function imgRun(img, elem) { 
            for (let i = 0; i < img.length; i++) { 
                img[i].addEventListener('click', (e) => {
                     openImg(elem, imgShow(e));
                });
            };
        };
        runOpen(btnCall, popUpCall);
        runOpen(btnTranslate, popUpTranslate);
        runClose(popUpCall);
        runClose(popUpTranslate);
        imgRun(img, popImg); 
        runClose(popImg);
    };
    
    function sliderRunner() { 
            let slides = document.querySelectorAll(".slider-items"),
                dots = document.querySelectorAll(".dot-items"),
                slideIndex = 1;
            showSlides(slideIndex);
            function init() { 
             for (let i = 0; i < dots.length; i++) {
                 dots[i].addEventListener('click', (e) => {
                     let dot = +e.target.getAttribute("title");
                     currentSlide(dot);
                 });
                };
            };
             
             function currentSlide(n) {
               showSlides(slideIndex = n);
            };
             function showSlides(n) {
               if (n > slides.length) {slideIndex = 1}    
               if (n < 1) {slideIndex = slides.length}
               for (let i = 0; i < slides.length; i++) {
                   slides[i].style.display = "none";  
               }
               for (let i = 0; i < dots.length; i++) {
                   dots[i].className = dots[i].className.replace(" bulett-active", "");
               }
               slides[slideIndex-1].style.display = "flex";  
               dots[slideIndex-1].className += " bulett-active";
        };
        init();
    };

    menuSticky();
    PopUpLogic();
    sliderRunner();
    burgerLogic();
};