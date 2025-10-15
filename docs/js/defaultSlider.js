// select

let _imagesWrapperDef = document.querySelectorAll(".freshSwiperDef");
let freshWrapperDef = document.querySelector(".freshWrapperDef");
let btnRightDefault = document.getElementById("btnRightDefault");
let btnLeftDefault = document.getElementById("btnLeftDefault");

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
