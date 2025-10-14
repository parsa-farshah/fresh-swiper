// select

let _imagesWrapperDef = document.querySelectorAll(".freshSwiperDef");
let freshWrapperDef = document.querySelector(".freshWrapperDef");
const btnRightDefault = document.getElementById("btnRightDefault");
const btnLeftDefault = document.getElementById("btnLeftDefault");

btnRightDefault.classList.add("btnRightCss");
btnLeftDefault.classList.add("btnLeftCss");
freshWrapperDef.classList.add("wraperDef");

_imagesWrapperDef.forEach((imageWrap) => {
  imageWrap.classList.add("imagesCss");
});

let flagRightDef = 0;
let transRightNumbDef = 0;
let flagRightClickDef = 0;

btnRightDefault.addEventListener("click", () => {
  if (flagRightClickDef == _imagesWrapperDef.length - 1) {
    btnRightDefault.removeEventListener("click", () => {});
  } else {
    flagRightClickDef++;
    transRightNumbDef = transRightNumbDef + flagRightDef - 100;
    _imagesWrapperDef.forEach((item) => {
      item.style.transition = "0.5s all";
      item.style.transform = `translateX(${transRightNumbDef}%)`;
    });
  }
});

let flagLeftClickDef = 0;
let flagLeftDef = 0;

btnLeftDefault.addEventListener("click", () => {
  // if click
  flagRightClickDef--;
  flagLeftClickDef++;
  //   if click too much and dont have picture
  if (flagRightClickDef < 0) {
    btnLeftDefault.removeEventListener("click", () => {});
    flagRightClickDef = 0;
    flagLeftClickDef = 0;
    transRightNumbDef = 0;
  } else {
    transRightNumbDef = transRightNumbDef + flagLeftDef + 100;
    _imagesWrapperDef.forEach((item) => {
      item.style.transition = "0.5s all";
      item.style.transform = `translateX(${transRightNumbDef}%)`;
    });
  }
});

//slider default Loop

let _imagesWrapperDefLoop = document.querySelectorAll(".freshSwiperDefLoop");
let freshWrapperDefLoop = document.querySelector(".freshWrapperDefLoop");
const btnRightDefaultLoop = document.getElementById("btnRightDefaultLoop");
const btnLeftDefaultLoop = document.getElementById("btnLeftDefaultLoop");
const TimeSpeedDefLoop = 1500;

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
