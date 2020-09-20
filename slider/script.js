const sliderContainer = document.querySelector('.slider-container');
const sliderOverlay = document.querySelector('.slider-overlay');
const sliderBtnRight = document.querySelector('.slider-btn-right');
const sliderBtnLeft = document.querySelector('.slider-btn-left');
const sliders = [
    {
        image: "./slider-bg-1.jpg"
    },
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

//Set default image as first one in array
var i = 0;
sliderContainer.style.backgroundImage=`url("${sliders[0].image}")`



sliderBtnRight.addEventListener('click',()=>{
    i = (i + 1) % sliders.length;
    sliderContainer.style.backgroundImage=`url("${sliders[i].image}")` 
})
sliderBtnLeft.addEventListener('click',()=>{
    if(i > 0){
        i = (i - 1) % sliders.length;
        sliderContainer.style.backgroundImage=`url("${sliders[i].image}")`
    }
})