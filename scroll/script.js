function getDistY(){
    return document.documentElement.scrollTop || window.pageYOffset;
}
window.addEventListener("scroll", () =>{
    const distanceY = getDistY(),shrinkOn = 50,initialHeight='10vh', endHeight='5vh';
    var nav = document.querySelector('.nav.shortOnScroll')
    if (distanceY > shrinkOn){
        nav.style.height = endHeight;
    }
    else{
        nav.style.height = initialHeight;
    }
} );
window.addEventListener("scroll", ()=>{
    const distanceY = getDistY(),shrinkOn = 50,initialOpacity='1', endOpacity='.6';
    var nav = document.querySelector('.nav.transparentOnScroll');
    if (distanceY > shrinkOn){
        nav.style.opacity = endOpacity;
    }
    else{
        nav.style.opacity = initialOpacity;
    }
});