document.addEventListener('DOMContentLoaded', () => {



    // elements 
    const carousel = document.querySelector('.carousel');



    // navigation button 
    const preview = document.getElementById('prev');
    const next = document.getElementById('next');

    // initial slide 
    let initial = 0;


    // move slide item function 
    const moveSliderItem = () => {
        carousel.style.transform = `translateX(-${carousel.children[initial].offsetLeft}px)`
    };


    // preview event function  
    preview.addEventListener('click', () => {
        if(initial <= 0) {
            initial = carousel.childElementCount - 1;
        }else {
            initial--
        };

        moveSliderItem();
    });

    
    // next event function 
    next.addEventListener('click', () => {
        // const slideEnd = initial >= carousel.childElementCount-1;
        if(initial >= carousel.childElementCount-1)  {
            initial = 0;
        }else {
            initial++;
        };

        moveSliderItem();
    });





})