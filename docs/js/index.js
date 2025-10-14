let _images = document.querySelectorAll(".freshSwiper");

// btn right

const btnRightDefault = document.getElementById("btnRightDefault");
const btnLeftDefault = document.getElementById("btnLeftDefault");
let flagRightDef = 0;
let transRightNumbDef = 0;

let flagRightClickDef = 0;

btnRightDefault.addEventListener("click", () => {
  if (flagRightClickDef == _images.length - 1) {
    btnRightDefault.removeEventListener("click", () => {});
  } else {
    flagRightClickDef++;
    transRightNumbDef = transRightNumbDef + flagRightDef - 100;
    _images.forEach((item) => {
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
    _images.forEach((item) => {
      item.style.transition = "0.5s all";
      item.style.transform = `translateX(${transRightNumbDef}%)`;
    });
  }
});
