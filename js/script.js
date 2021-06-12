
"use strict"
   
//burger JS
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
if (headerBurger){        
    headerBurger.addEventListener('click', function(e){
        document.body.classList.toggle('lock');
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
    })
}

 // Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length>0) {
menuLinks.forEach(menuLink=> {
    menuLink.addEventListener('click', onMenuLinkClick);
});
function onMenuLinkClick (e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
        
    if(headerBurger.classList.contains('active')){
        document.body.classList.remove('lock');
         headerBurger.classList.remove('active');
        headerMenu.classList.remove('active'); 
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}
}

$(document).ready(function() {
    
    //burger  jQuery
    // $(".header__burger").click(function(event) {
    //     $(".header__burger, .header__menu").toggleClass("active");
    //     $("body").toggleClass("lock");
    // }); 

    
    // spoller jQuery
    $('.questions-title').click(function(event) {
        if($('.questions').hasClass('one')){
            $('.questions-title').not($(this)).removeClass('active');
            $('.questions-text').not($(this).next()).slideUp(300);      
        }
    $(this).toggleClass('active').next().slideToggle(300);
    });


    
});








