//Check whether an element is more than 'x' percent visible
function isElementXPercentInViewport(el, percentVisible) {
    let
      rect = el.getBoundingClientRect(),
      windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return !(
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
  };
  //Get (vertical) distance that the user has scrolled
  function getDistY() {
    return document.documentElement.scrollTop || window.pageYOffset;
  }
  window.addEventListener("scroll", () => {
    const distanceY = getDistY();
    let boxes = document.querySelectorAll('.box-hidden');
    boxes.forEach((box) => {
      if (isElementXPercentInViewport(box, 80)) {
        box.classList.remove('box-hidden');
      }
    })
  });