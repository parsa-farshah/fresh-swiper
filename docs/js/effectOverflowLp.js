let _imagesWrapperEffectOverflowLp = document.querySelectorAll(
  ".freshSwiperEffectOverflowLp"
);
let freshWrapperEffectOverflowLp = document.querySelector(
  ".freshWrapperEffectOverflowLp"
);
const btnRightEffectOverflowLp = document.getElementById(
  "btnRightEffectOverflowLp"
);
const btnLeftEffectOverflowLp = document.getElementById(
  "btnLeftEffectOverflowLp"
);
const TimeSpeedEffectOverflowLp = 2500;

btnRightEffectOverflowLp.classList.add("btnRightCssEffectOverflowLp");
btnLeftEffectOverflowLp.classList.add("btnLeftCssEffectOverflowLp");
freshWrapperEffectOverflowLp.classList.add("wraperEffectOverflowLp");

_imagesWrapperEffectOverflowLp.forEach((imageWrap) => {
  imageWrap.classList.add("imagesCssEffectOverflowLp");
});

let flagRightEffectOverflowLp = 0;
let transRightNumbEffectOverflowLp = 0;
let flagRightClickEffectOverflowLp = 0;

btnRightEffectOverflowLp.addEventListener("click", () => {
  let imgEffLp1 = document.querySelector(".effectLp1");
  let imgEffLp2 = document.querySelector(".effectLp2");
  let imgEffLp3 = document.querySelector(".effectLp3");

  let dataTartibLp1 = imgEffLp1.getAttribute("data-tartib");
  let dataTartibLp2 = imgEffLp2.getAttribute("data-tartib");
  let dataTartibLp3 = imgEffLp3.getAttribute("data-tartib");

  if (dataTartibLp2 == 2) {
    imgEffLp2.classList.remove("effectLp2");
    imgEffLp2.classList.add("effectLp1");
    imgEffLp2.setAttribute("data-tartib", "1");
  }
  if (dataTartibLp3 == 3) {
    imgEffLp3.classList.remove("effectLp3");
    imgEffLp3.classList.add("effectLp2");
    imgEffLp3.setAttribute("data-tartib", "2");
  }
  if (dataTartibLp1 == 1) {
    imgEffLp1.classList.remove("effectLp1");
    imgEffLp1.classList.add("effectLp3");
    imgEffLp1.setAttribute("data-tartib", "3");
  }
});

btnLeftEffectOverflowLp.addEventListener("click", () => {
  let imgEffLp1 = document.querySelector(".effectLp1");
  let imgEffLp2 = document.querySelector(".effectLp2");
  let imgEffLp3 = document.querySelector(".effectLp3");

  let dataTartibLp1 = imgEffLp1.getAttribute("data-tartib");
  let dataTartibLp2 = imgEffLp2.getAttribute("data-tartib");
  let dataTartibLp3 = imgEffLp3.getAttribute("data-tartib");

  if (dataTartibLp2 == 2) {
    imgEffLp2.classList.remove("effectLp2");
    imgEffLp2.classList.add("effectLp3");
    imgEffLp2.setAttribute("data-tartib", "3");
  }
  if (dataTartibLp3 == 3) {
    imgEffLp3.classList.remove("effectLp3");
    imgEffLp3.classList.add("effectLp1");
    imgEffLp3.setAttribute("data-tartib", "1");
  }
  if (dataTartibLp1 == 1) {
    imgEffLp1.classList.remove("effectLp1");
    imgEffLp1.classList.add("effectLp2");
    imgEffLp1.setAttribute("data-tartib", "2");
  }
});

// loop

setInterval(() => {
  btnRightEffectOverflowLp.click();
}, TimeSpeedEffectOverflowLp);
