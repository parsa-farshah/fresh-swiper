let _imagesWrapperEffectOverflow = document.querySelectorAll(
  ".freshSwiperEffectOverflow"
);
let freshWrapperEffectOverflow = document.querySelector(
  ".freshWrapperEffectOverflow"
);
const btnRightEffectOverflow = document.getElementById(
  "btnRightEffectOverflow"
);
const btnLeftEffectOverflow = document.getElementById("btnLeftEffectOverflow");
const TimeSpeedEffectOverflow = 1500;

btnRightEffectOverflow.classList.add("btnRightCssEffectOverflow");
btnLeftEffectOverflow.classList.add("btnLeftCssEffectOverflow");
freshWrapperEffectOverflow.classList.add("wraperEffectOverflow");

_imagesWrapperEffectOverflow.forEach((imageWrap) => {
  imageWrap.classList.add("imagesCssEffectOverflow");
});

let flagRightEffectOverflow = 0;
let transRightNumbEffectOverflow = 0;
let flagRightClickEffectOverflow = 0;

btnRightEffectOverflow.addEventListener("click", () => {
  let imgEff1 = document.querySelector(".effect1");
  let imgEff2 = document.querySelector(".effect2");
  let imgEff3 = document.querySelector(".effect3");

  let dataTartib1 = imgEff1.getAttribute("data-tartib");
  let dataTartib2 = imgEff2.getAttribute("data-tartib");
  let dataTartib3 = imgEff3.getAttribute("data-tartib");

  if (dataTartib2 == 2) {
    imgEff2.classList.remove("effect2");
    imgEff2.classList.add("effect1");
    imgEff2.setAttribute("data-tartib", "1");
  }
  if (dataTartib3 == 3) {
    imgEff3.classList.remove("effect3");
    imgEff3.classList.add("effect2");
    imgEff3.setAttribute("data-tartib", "2");
  }
  if (dataTartib1 == 1) {
    imgEff1.classList.remove("effect1");
    imgEff1.classList.add("effect3");
    imgEff1.setAttribute("data-tartib", "3");
  }
});

btnLeftEffectOverflow.addEventListener("click", () => {
    let imgEff1 = document.querySelector(".effect1");
  let imgEff2 = document.querySelector(".effect2");
  let imgEff3 = document.querySelector(".effect3");

  let dataTartib1 = imgEff1.getAttribute("data-tartib");
  let dataTartib2 = imgEff2.getAttribute("data-tartib");
  let dataTartib3 = imgEff3.getAttribute("data-tartib");

  if (dataTartib2 == 2) {
    imgEff2.classList.remove("effect2");
    imgEff2.classList.add("effect3");
    imgEff2.setAttribute("data-tartib", "3");
  }
  if (dataTartib3 == 3) {
    imgEff3.classList.remove("effect3");
    imgEff3.classList.add("effect1");
    imgEff3.setAttribute("data-tartib", "1");
  }
  if (dataTartib1 == 1) {
    imgEff1.classList.remove("effect1");
    imgEff1.classList.add("effect2");
    imgEff1.setAttribute("data-tartib", "2");
  }
});
