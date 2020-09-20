const sliderContainer = document.querySelector('.slider-container');
const sliderOverlay = document.querySelector('.slider-overlay');
const sliderBtnRight = document.querySelector('.slider-btn-right');
const sliderBtnLeft = document.querySelector('.slider-btn-left');
const sliderDotContainer = document.querySelector('.slider-dot-container')
const slides = [
    {
        image:'./slider-bg-2.jpg'
    },
    {
        image:'./slider-bg-3.jpg'
    },
    {
        image:'./slider-bg-4.jpg'
    }
]
for(var k = 0; k < slides.length;k++){
    var newDot = document.createElement('div');
    if(k == 0){
        newDot.classList.add('slider-dot-active');
    }
    else{
        newDot.classList.add('slider-dot');
    }
    sliderDotContainer.appendChild(newDot);
}
//Set default image as first one in array
var i = 0;
sliderContainer.style.backgroundImage=`url("${slides[0].image}")`

//Have left button wait until click, on click cycle the slide backwards by 1 space
sliderBtnLeft.addEventListener('click',()=>{
    //Only cycle the slide backwards by 1 space if i is positive
    if(i > 0){
        sliderDotContainer.children[i].style.backgroundColor='gray'
        i = (i - 1) % slides.length;
        sliderDotContainer.children[i].style.backgroundColor='white'
        sliderContainer.style.backgroundImage=`url("${slides[i].image}")`
    }
})

//Have right button wait until click, on click cycle the slide forwards by 1 space
sliderBtnRight.addEventListener('click',()=>{
    sliderDotContainer.children[i].style.backgroundColor='gray'
    i = (i + 1) % slides.length;
    sliderDotContainer.children[i].style.backgroundColor='white'
    sliderContainer.style.backgroundImage=`url("${slides[i].image}")` 
})
