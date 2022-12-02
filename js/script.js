const arrow__up = document.getElementById('swiper-button-next');
const number_slide = document.getElementById('main__number__p');
const arrow__down = document.getElementById('swiper-button-prev');

const circle = document.getElementById('circle__wrapper');

const number = 1;
number_slide.textContent = number;

function slider__number(){
    if(number <= 3){
        numner++;
    }
}
