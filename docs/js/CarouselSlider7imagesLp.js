
let _imagesWrapperCarouselSliderSevenLp = document.querySelectorAll(
  ".freshSwiperCarouselSliderSevenLp"
);
let freshWrapperCarouselSliderSevenLp = document.querySelector(
  ".freshWrapperCarouselSliderSevenLp"
);
const btnRightCarouselSliderSevenLp = document.getElementById(
  "btnRightCarouselSliderSevenLp"
);
const btnLeftCarouselSliderSevenLp = document.getElementById(
  "btnLeftCarouselSliderSevenLp"
);
const TimeSpeedCarouselSliderSevenLp = 2000;

btnRightCarouselSliderSevenLp.classList.add("btnRightCssCarouselSliderSevenLp");
btnLeftCarouselSliderSevenLp.classList.add("btnLeftCssCarouselSliderSevenLp");
freshWrapperCarouselSliderSevenLp.classList.add("wraperCarouselSliderSevenLp");

_imagesWrapperCarouselSliderSevenLp.forEach((imageWrap) => {
  imageWrap.classList.add("imagesCssCarouselSliderSevenLp");
});

let flagRightCarouselSliderSevenLp = 0;
let transRightNumbCarouselSliderSevenLp = 0;
let flagRightClickCarouselSliderSevenLp = 0;

/////////////////////////////////////////////// right click

let flagCountSevenLp = 0;

btnRightCarouselSliderSevenLp.addEventListener("click", (e) => {
  const sliders = document.querySelectorAll(
    ".freshSwiperCarouselSliderSevenLp"
  );

  sliders.forEach((slider) => {
    let data = parseInt(slider.getAttribute("data-tartib"));
    data -= 1;
    slider.setAttribute("data-tartib", data);

    slider.classList.remove(
      "CarouselSliderSevenLpMinus4",
      "CarouselSliderSevenLpMinus3",
      "CarouselSliderSevenLpMinus2",
      "CarouselSliderSevenLpMinus1",
      "CarouselSliderSevenLp1",
      "CarouselSliderSevenLp2",
      "CarouselSliderSevenLp3",
      "CarouselSliderSevenLp4",
      "CarouselSliderSevenLp5",
      "CarouselSliderSevenLp6",
      "CarouselSliderSevenLp7",
      "CarouselSliderSevenLpRHide"
    );

    if (data <= 5) slider.classList.add("CarouselSliderSevenLpMinus4");
    else if (data == 6) slider.classList.add("CarouselSliderSevenLpMinus3");
    else if (data == 7) slider.classList.add("CarouselSliderSevenLpMinus2");
    else if (data == 8) slider.classList.add("CarouselSliderSevenLpMinus1");
    else if (data == 9) slider.classList.add("CarouselSliderSevenLp1");
    else if (data == 10) slider.classList.add("CarouselSliderSevenLp2");
    else if (data == 11) slider.classList.add("CarouselSliderSevenLp3");
    else if (data == 12) slider.classList.add("CarouselSliderSevenLp4");
    else if (data == 13) slider.classList.add("CarouselSliderSevenLp5");
    else if (data == 14) slider.classList.add("CarouselSliderSevenLp6");
    else if (data == 15) slider.classList.add("CarouselSliderSevenLp7");
    else slider.classList.add("CarouselSliderSevenLpRHide");
  });
  flagCountSevenLp += 1;
  if (flagCountSevenLp >= 5) {
    btnRightCarouselSliderSevenLp.style.display = "none";
  } else {
    btnLeftCarouselSliderSevenLp.style.display = "flex";
  }
});
/////////////////////////////// left click

btnLeftCarouselSliderSevenLp.addEventListener("click", () => {
  const sliders = document.querySelectorAll(
    ".freshSwiperCarouselSliderSevenLp"
  );

  sliders.forEach((item) => {
    let data = parseInt(item.getAttribute("data-tartib"));
    data += 1;
    item.setAttribute("data-tartib", data);

    item.classList.remove(
      "CarouselSliderSevenLpMinus4",
      "CarouselSliderSevenLpMinus3",
      "CarouselSliderSevenLpMinus2",
      "CarouselSliderSevenLpMinus1",
      "CarouselSliderSevenLp1",
      "CarouselSliderSevenLp2",
      "CarouselSliderSevenLp3",
      "CarouselSliderSevenLp4",
      "CarouselSliderSevenLp5",
      "CarouselSliderSevenLp6",
      "CarouselSliderSevenLp7",
      "CarouselSliderSevenLpRHide"
    );

    if (data <= 5) item.classList.add("CarouselSliderSevenLpMinus4");
    else if (data == 6) item.classList.add("CarouselSliderSevenLpMinus3");
    else if (data == 7) item.classList.add("CarouselSliderSevenLpMinus2");
    else if (data == 8) item.classList.add("CarouselSliderSevenLpMinus1");
    else if (data == 9) item.classList.add("CarouselSliderSevenLp1");
    else if (data == 10) item.classList.add("CarouselSliderSevenLp2");
    else if (data == 11) item.classList.add("CarouselSliderSevenLp3");
    else if (data == 12) item.classList.add("CarouselSliderSevenLp4");
    else if (data == 13) item.classList.add("CarouselSliderSevenLp5");
    else if (data == 14) item.classList.add("CarouselSliderSevenLp6");
    else if (data == 15) item.classList.add("CarouselSliderSevenLp7");
    else item.classList.add("RightHiddenSevenLp");
  });
  flagCountSevenLp -= 1;
  if (flagCountSevenLp <= -1) {
    btnLeftCarouselSliderSevenLp.style.display = "none";
  } else {
    btnRightCarouselSliderSevenLp.style.display = "flex";
  }
});
let flagLoopInt = 0;
let flagLoopBoolean = true;
setInterval(() => {
  if (flagLoopBoolean == true) {
    flagLoopInt++;
    if (flagLoopInt <= 5) {
      btnRightCarouselSliderSevenLp.click();
    } else {
      flagLoopBoolean = false;
    }
  } else {
    flagLoopInt--;
    if (flagLoopInt >= 0) {
      btnLeftCarouselSliderSevenLp.click();
    } else {
      flagLoopBoolean = true;
    }
  }
}, TimeSpeedCarouselSliderSevenLp);
