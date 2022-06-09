const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const slider = document.querySelector('.carousel__slider');

var cardIndex;
var slideNum;

rightArrow.addEventListener('click', ()=>{
    cardIndex = document.querySelector('input[name="slider"]:checked').value;
    if (cardIndex <3 ) {
        cardIndex++;
    }
    else{
        cardIndex = 1;
    }
    slideNum = 'slider' + cardIndex;
    document.getElementById(slideNum).checked = true;
})
leftArrow.addEventListener('click', ()=>{
    cardIndex = document.querySelector('input[name="slider"]:checked').value;
    if (cardIndex >1 ) {
        cardIndex--;
    }
    else{
        cardIndex = 3;
    }
    slideNum = 'slider' + cardIndex;
    document.getElementById(slideNum).checked = true;
});