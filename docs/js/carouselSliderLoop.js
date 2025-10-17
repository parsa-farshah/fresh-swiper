let _imagesWrapperCarouselSliderLp = document.querySelectorAll(
  ".freshSwiperCarouselSliderLp"
);
let freshWrapperCarouselSliderLp = document.querySelector(
  ".freshWrapperCarouselSliderLp"
);
const btnRightCarouselSliderLp = document.getElementById(
  "btnRightCarouselSliderLp"
);
const btnLeftCarouselSliderLp = document.getElementById(
  "btnLeftCarouselSliderLp"
);
const TimeSpeedCarouselSliderLp = 1800;

btnRightCarouselSliderLp.classList.add("btnRightCssCarouselSliderLp");
btnLeftCarouselSliderLp.classList.add("btnLeftCssCarouselSliderLp");
freshWrapperCarouselSliderLp.classList.add("wraperCarouselSliderLp");

_imagesWrapperCarouselSliderLp.forEach((imageWrap) => {
  imageWrap.classList.add("imagesCssCarouselSliderLp");
});

let flagRightCarouselSliderLp = 0;
let transRightNumbCarouselSliderLp = 0;
let flagRightClickCarouselSliderLp = 0;

btnRightCarouselSliderLp.addEventListener("click", () => {
  let imgCarouselSliderLp1 = document.querySelector(".CarouselSliderLp1");
  let imgCarouselSliderLp2 = document.querySelector(".CarouselSliderLp2");
  let imgCarouselSliderLp3 = document.querySelector(".CarouselSliderLp3");

  let dataTartibCarouselSliderLp1 =
    imgCarouselSliderLp1.getAttribute("data-tartib");
  let dataTartibCarouselSliderLp2 =
    imgCarouselSliderLp2.getAttribute("data-tartib");
  let dataTartibCarouselSliderLp3 =
    imgCarouselSliderLp3.getAttribute("data-tartib");

  if (dataTartibCarouselSliderLp2 == 2) {
    imgCarouselSliderLp2.classList.remove("CarouselSliderLp2");
    imgCarouselSliderLp2.classList.add("CarouselSliderLp1");
    imgCarouselSliderLp2.setAttribute("data-tartib", "1");
  }
  if (dataTartibCarouselSliderLp3 == 3) {
    imgCarouselSliderLp3.classList.remove("CarouselSliderLp3");
    imgCarouselSliderLp3.classList.add("CarouselSliderLp2");
    imgCarouselSliderLp3.setAttribute("data-tartib", "2");
  }
  if (dataTartibCarouselSliderLp1 == 1) {
    imgCarouselSliderLp1.classList.remove("CarouselSliderLp1");
    imgCarouselSliderLp1.classList.add("CarouselSliderLp3");
    imgCarouselSliderLp1.setAttribute("data-tartib", "3");
  }
});

btnLeftCarouselSliderLp.addEventListener("click", () => {
  let imgCarouselSliderLp1 = document.querySelector(".CarouselSliderLp1");
  let imgCarouselSliderLp2 = document.querySelector(".CarouselSliderLp2");
  let imgCarouselSliderLp3 = document.querySelector(".CarouselSliderLp3");

  let dataTartibCarouselSliderLp1 =
    imgCarouselSliderLp1.getAttribute("data-tartib");
  let dataTartibCarouselSliderLp2 =
    imgCarouselSliderLp2.getAttribute("data-tartib");
  let dataTartibCarouselSliderLp3 =
    imgCarouselSliderLp3.getAttribute("data-tartib");

  if (dataTartibCarouselSliderLp2 == 2) {
    imgCarouselSliderLp2.classList.remove("CarouselSliderLp2");
    imgCarouselSliderLp2.classList.add("CarouselSliderLp3");
    imgCarouselSliderLp2.setAttribute("data-tartib", "3");
  }
  if (dataTartibCarouselSliderLp3 == 3) {
    imgCarouselSliderLp3.classList.remove("CarouselSliderLp3");
    imgCarouselSliderLp3.classList.add("CarouselSliderLp1");
    imgCarouselSliderLp3.setAttribute("data-tartib", "1");
  }
  if (dataTartibCarouselSliderLp1 == 1) {
    imgCarouselSliderLp1.classList.remove("CarouselSliderLp1");
    imgCarouselSliderLp1.classList.add("CarouselSliderLp2");
    imgCarouselSliderLp1.setAttribute("data-tartib", "2");
  }
});

setInterval(() => {
  btnRightCarouselSliderLp.click();
}, TimeSpeedCarouselSliderLp);
