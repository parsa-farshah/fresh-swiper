let _imagesWrapperCarouselSliderFive = document.querySelectorAll(
  ".freshSwiperCarouselSliderFive"
);
let freshWrapperCarouselSliderFive = document.querySelector(
  ".freshWrapperCarouselSliderFive"
);
const btnRightCarouselSliderFive = document.getElementById(
  "btnRightCarouselSliderFive"
);
const btnLeftCarouselSliderFive = document.getElementById(
  "btnLeftCarouselSliderFive"
);
const TimeSpeedCarouselSliderFive = 1500;

btnRightCarouselSliderFive.classList.add("btnRightCssCarouselSliderFive");
btnLeftCarouselSliderFive.classList.add("btnLeftCssCarouselSliderFive");
freshWrapperCarouselSliderFive.classList.add("wraperCarouselSliderFive");

_imagesWrapperCarouselSliderFive.forEach((imageWrap) => {
  imageWrap.classList.add("imagesCssCarouselSliderFive");
});

let flagRightCarouselSliderFive = 0;
let transRightNumbCarouselSliderFive = 0;
let flagRightClickCarouselSliderFive = 0;

/////////////////////////////////////////////// right click

let flagCount = 0;

btnRightCarouselSliderFive.addEventListener("click", (e) => {
  const sliders = document.querySelectorAll(".freshSwiperCarouselSliderFive");

  sliders.forEach((slider) => {
    let data = parseInt(slider.getAttribute("data-tartib"));
    data -= 1;
    slider.setAttribute("data-tartib", data);

    slider.classList.remove(
      "CarouselSliderFiveMinus4",
      "CarouselSliderFiveMinus3",
      "CarouselSliderFiveMinus2",
      "CarouselSliderFiveMinus1",
      "CarouselSliderFive1",
      "CarouselSliderFive2",
      "CarouselSliderFive3",
      "CarouselSliderFive4",
      "CarouselSliderFive5",
      "CarouselSliderFive6",
      "CarouselSliderFive7",
      "CarouselSliderFiveRHide"
    );

    if (data <= 5) slider.classList.add("CarouselSliderFiveMinus4");
    else if (data == 6) slider.classList.add("CarouselSliderFiveMinus3");
    else if (data == 7) slider.classList.add("CarouselSliderFiveMinus2");
    else if (data == 8) slider.classList.add("CarouselSliderFiveMinus1");
    else if (data == 9) slider.classList.add("CarouselSliderFive1");
    else if (data == 10) slider.classList.add("CarouselSliderFive2");
    else if (data == 11) slider.classList.add("CarouselSliderFive3");
    else if (data == 12) slider.classList.add("CarouselSliderFive4");
    else if (data == 13) slider.classList.add("CarouselSliderFive5");
    else if (data == 14) slider.classList.add("CarouselSliderFive6");
    else if (data == 15) slider.classList.add("CarouselSliderFive7");
    else slider.classList.add("CarouselSliderFiveRHide");
  });
  flagCount += 1;
  if (flagCount >= 5) {
    btnRightCarouselSliderFive.style.display = "none";
  } else {
    btnLeftCarouselSliderFive.style.display = "flex";
  }
});
/////////////////////////////// left click

btnLeftCarouselSliderFive.addEventListener("click", () => {
  const sliders = document.querySelectorAll(".freshSwiperCarouselSliderFive");

  sliders.forEach((item) => {
    let data = parseInt(item.getAttribute("data-tartib"));
    data += 1;
    item.setAttribute("data-tartib", data);

    item.classList.remove(
      "CarouselSliderFiveMinus4",
      "CarouselSliderFiveMinus3",
      "CarouselSliderFiveMinus2",
      "CarouselSliderFiveMinus1",
      "CarouselSliderFive1",
      "CarouselSliderFive2",
      "CarouselSliderFive3",
      "CarouselSliderFive4",
      "CarouselSliderFive5",
      "CarouselSliderFive6",
      "CarouselSliderFive7",
      "CarouselSliderFiveRHide"
    );

    if (data <= 5) item.classList.add("CarouselSliderFiveMinus4");
    else if (data == 6) item.classList.add("CarouselSliderFiveMinus3");
    else if (data == 7) item.classList.add("CarouselSliderFiveMinus2");
    else if (data == 8) item.classList.add("CarouselSliderFiveMinus1");
    else if (data == 9) item.classList.add("CarouselSliderFive1");
    else if (data == 10) item.classList.add("CarouselSliderFive2");
    else if (data == 11) item.classList.add("CarouselSliderFive3");
    else if (data == 12) item.classList.add("CarouselSliderFive4");
    else if (data == 13) item.classList.add("CarouselSliderFive5");
    else if (data == 14) item.classList.add("CarouselSliderFive6");
    else if (data == 15) item.classList.add("CarouselSliderFive7");
    else item.classList.add("RightHiddenFive");
  });
  flagCount -= 1;
  if (flagCount <= -1) {
    btnLeftCarouselSliderFive.style.display = "none";
  } else {
    btnRightCarouselSliderFive.style.display = "flex";
  }
});
