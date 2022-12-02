const arrow__up = document.querySelector('#swiper-button-next');
const number_slide = document.querySelector('#main__number__p');
const arrow__down = document.querySelector('#swiper-button-prev');

const circle = document.querySelector('#circle__wrapper');

let number = 1;
let max_number = 3;
let rotation = 0;
arrow__up.addEventListener('click', function (){
    slider__number_up();
});
arrow__down.addEventListener('click', function (){
    slider__number_down();
});
number_slide.textContent = number;
function slider__number_up(){
    if(number <= max_number){
        number = number + 1;
        number_slide.textContent = number;
        arrow__up.disabled = true;
        rotation = rotation + 45;
        var str =  rotation.toString();

        circle.style.rotate = str +"deg";
    }
    
}
function slider__number_down(){

    if(number > 1){
        number = number - 1;
        number_slide.textContent = number;
        rotation = rotation - 45 ;
        var str =  rotation.toString();

        circle.style.rotate = str +"deg";
    }
    
    
}
