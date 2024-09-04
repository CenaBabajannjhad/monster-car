const img = document.querySelector("img");
const title = document.querySelector("div");
const body = document.body;
let imgCounter = 30;
let titleCounter = 50;
let titleOpacity = 100;
let titlePaddingTop = 200;



window.addEventListener("load", () => {
  imageAnimation();
});



function imageAnimation() {
  img.style.top = `${imgCounter}%`;
  imgCounter--;

  if (imgCounter === 10) {
    img.style.filter = 'saturate(2)';
    body.style.backdropFilter = 'saturate(2)';
    setTimeout(() => {
        titleAnimation();
    } , 800)
  }
  if (imgCounter >= 10) {
    imageAnimation();
  }
}




function titleAnimation() {
  title.style.paddingTop = `${titleCounter}%`;
  title.style.opacity = `${titleOpacity}`;
  titleCounter--;
  titleOpacity--;

  if (titleCounter >= 0) {
    titleAnimation();
  }
}
