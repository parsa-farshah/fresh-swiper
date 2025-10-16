let _imagesWrapperCarouselSlider = document.querySelectorAll(
  ".freshSwiperCarouselSlider"
);
let freshWrapperCarouselSlider = document.querySelector(
  ".freshWrapperCarouselSlider"
);
const btnRightCarouselSlider = document.getElementById(
  "btnRightCarouselSlider"
);
const btnLeftCarouselSlider = document.getElementById("btnLeftCarouselSlider");
const TimeSpeedCarouselSlider = 1500;

btnRightCarouselSlider.classList.add("btnRightCssCarouselSlider");
btnLeftCarouselSlider.classList.add("btnLeftCssCarouselSlider");
freshWrapperCarouselSlider.classList.add("wraperCarouselSlider");

_imagesWrapperCarouselSlider.forEach((imageWrap) => {
  imageWrap.classList.add("imagesCssCarouselSlider");
});

let flagRightCarouselSlider = 0;
let transRightNumbCarouselSlider = 0;
let flagRightClickCarouselSlider = 0;

btnRightCarouselSlider.addEventListener("click", () => {
  
  let imgCarouselSlider1 = document.querySelector(".CarouselSlider1");
  let imgCarouselSlider2 = document.querySelector(".CarouselSlider2");
  let imgCarouselSlider3 = document.querySelector(".CarouselSlider3");

  let dataTartibCarouselSlider1 = imgCarouselSlider1.getAttribute("data-tartib");
  let dataTartibCarouselSlider2 = imgCarouselSlider2.getAttribute("data-tartib");
  let dataTartibCarouselSlider3 = imgCarouselSlider3.getAttribute("data-tartib");

  if (dataTartibCarouselSlider2 == 2) {
    imgCarouselSlider2.classList.remove("CarouselSlider2");
    imgCarouselSlider2.classList.add("CarouselSlider1");
    imgCarouselSlider2.setAttribute("data-tartib", "1");
  }
  if (dataTartibCarouselSlider3 == 3) {
    imgCarouselSlider3.classList.remove("CarouselSlider3");
    imgCarouselSlider3.classList.add("CarouselSlider2");
    imgCarouselSlider3.setAttribute("data-tartib", "2");
  }
  if (dataTartibCarouselSlider1 == 1) {
    imgCarouselSlider1.classList.remove("CarouselSlider1");
    imgCarouselSlider1.classList.add("CarouselSlider3");
    imgCarouselSlider1.setAttribute("data-tartib", "3");
  }
});

btnLeftCarouselSlider.addEventListener("click", () => {
  let imgCarouselSlider1 = document.querySelector(".CarouselSlider1");
  let imgCarouselSlider2 = document.querySelector(".CarouselSlider2");
  let imgCarouselSlider3 = document.querySelector(".CarouselSlider3");

  let dataTartibCarouselSlider1 = imgCarouselSlider1.getAttribute("data-tartib");
  let dataTartibCarouselSlider2 = imgCarouselSlider2.getAttribute("data-tartib");
  let dataTartibCarouselSlider3 = imgCarouselSlider3.getAttribute("data-tartib");

  if (dataTartibCarouselSlider2 == 2) {
    imgCarouselSlider2.classList.remove("CarouselSlider2");
    imgCarouselSlider2.classList.add("CarouselSlider3");
    imgCarouselSlider2.setAttribute("data-tartib", "3");
  }
  if (dataTartibCarouselSlider3 == 3) {
    imgCarouselSlider3.classList.remove("CarouselSlider3");
    imgCarouselSlider3.classList.add("CarouselSlider1");
    imgCarouselSlider3.setAttribute("data-tartib", "1");
  }
  if (dataTartibCarouselSlider1 == 1) {
    imgCarouselSlider1.classList.remove("CarouselSlider1");
    imgCarouselSlider1.classList.add("CarouselSlider2");
    imgCarouselSlider1.setAttribute("data-tartib", "2");
  }
});
