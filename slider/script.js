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
    }
]

var i = 0;
sliderContainer.style.backgroundImage=`url("${sliders[0].image}")`

sliderBtnRight.addEventListener('click',()=>{
    sliderContainer.style.backgroundImage=`url("${sliders[Math.abs((i + 1)%sliders.length)].image}")`
    i++
})
sliderBtnLeft.addEventListener('click',()=>{
    sliderContainer.style.backgroundImage=`url("${sliders[Math.abs((i - 1)%sliders.length)].image}")`
    i--;
})