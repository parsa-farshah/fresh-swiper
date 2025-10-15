let _imagesWrapperDefLoop = document.querySelectorAll(".freshSwiperDefLoop");
let freshWrapperDefLoop = document.querySelector(".freshWrapperDefLoop");
let btnRightDefaultLoop = document.getElementById("btnRightDefaultLoop");
let btnLeftDefaultLoop = document.getElementById("btnLeftDefaultLoop");
let TimeSpeedDefLoop = 1500;

btnRightDefaultLoop.classList.add("btnRightCssLoop");
btnLeftDefaultLoop.classList.add("btnLeftCssLoop");
freshWrapperDefLoop.classList.add("wraperDefLoop");

_imagesWrapperDefLoop.forEach((imageWrap) => {
  imageWrap.classList.add("imagesCssLoop");
});

let flagRightDefLoop = 0;
let transRightNumbDefLoop = 0;
let flagRightClickDefLoop = 0;

btnRightDefaultLoop.addEventListener("click", () => {
  if (flagRightClickDefLoop == _imagesWrapperDefLoop.length - 1) {
    btnRightDefaultLoop.removeEventListener("click", () => {});
  } else {
    flagRightClickDefLoop++;
    transRightNumbDefLoop = transRightNumbDefLoop + flagRightDefLoop - 100;
    _imagesWrapperDefLoop.forEach((item) => {
      item.style.transition = "0.5s all";
      item.style.transform = `translateX(${transRightNumbDefLoop}%)`;
    });
  }
});

let flagLeftClickDefLoop = 0;
let flagLeftDefLoop = 0;

btnLeftDefaultLoop.addEventListener("click", () => {
  // if click
  flagRightClickDefLoop--;
  flagLeftClickDefLoop++;
  //   if click too much and dont have picture
  if (flagRightClickDefLoop < 0) {
    btnLeftDefaultLoop.removeEventListener("click", () => {});
    flagRightClickDefLoop = 0;
    flagLeftClickDefLoop = 0;
    transRightNumbDefLoop = 0;
  } else {
    transRightNumbDefLoop = transRightNumbDefLoop + flagLeftDefLoop + 100;
    _imagesWrapperDefLoop.forEach((item) => {
      item.style.transition = "0.5s all";
      item.style.transform = `translateX(${transRightNumbDefLoop}%)`;
    });
  }
});

let goToRightLoop = true;
let stateLoop = true;
setInterval(() => {
  if (goToRightLoop == true) {
    if (stateLoop) {
      btnRightDefaultLoop.click();
      if (flagRightClickDefLoop === _imagesWrapperDefLoop.length - 1) {
        stateLoop = false;
      }
    } else {
      goToRightLoop = false;
    }
  } else {
    // click on left
    btnLeftDefaultLoop.click();
    // click when image not exist
    if (transRightNumbDefLoop == 0) {
      goToRightLoop = true;
      stateLoop = true;
    }
  }
}, TimeSpeedDefLoop);
