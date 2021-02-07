window.addEventListener("DOMContentLoaded", init);
function init() { 
    
    function menuSticky() { 
        let menuHeader = document.querySelector('.header-nav-wrapp'),
            headerHeigth = document.querySelector('.header_wrapper');
            console.log(headerHeigth.offsetHeight)
        window.addEventListener('scroll', () => { 
            let offSetHead = headerHeigth.offsetHeight - menuHeader.offsetHeight 
            if (pageYOffset >= offSetHead) {
              menuHeader.classList.add('fix-head');
          } else { 
              if (menuHeader.classList.contains('fix-head')) {
                  menuHeader.classList.remove('fix-head');
              } else { 
                  return;
              }
              
          }


        })
        
    }
    function burgerLogic() { 
        let burger = document.querySelector('.burger-menu'),
            navMenu = document.querySelector('.header-nav');
        
        burger.addEventListener('click', function () { 

            burger.classList.toggle('bgr-active');
            navMenu.classList.toggle('bgr-active');
        })


    }
    function PopUpLogic() { 
        let popUpCall = document.querySelector('#popup_call'),
            popUpTranslate = document.querySelector('#popup_translate'),
            btnCall = document.querySelector('.btn-call'),
            btnTranslate = document.querySelector('.btn-translate');
        function openPopUp(elem){
           elem.style='opacity: 1; visibility: visible;';
        };
    
        function closePopUp(elem){
            elem.style='opacity: 0; visibility: hidden;';
        };
        function runOpen(btn, elem) { 
            btn.addEventListener('click', (e)=> {
            e.preventDefault();
            openPopUp(elem);
       });
        };
        function runClose(elem) {
            elem.addEventListener('click', (e) => {
                e.preventDefault();
                closePopUp(elem);
            });
        }
        runOpen(btnCall, popUpCall);
        runOpen(btnTranslate, popUpTranslate);
        runClose(popUpCall);
        runClose(popUpTranslate);


    }

    menuSticky();
    PopUpLogic();
   
   
};