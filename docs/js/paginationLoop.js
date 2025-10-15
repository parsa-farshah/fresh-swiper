let _imagesWrapperPaginationLoop = document.querySelectorAll(
  ".freshSwiperPaginationLoop"
);
let freshWrapperPaginationLoop = document.querySelector(
  ".freshWrapperPaginationLoop"
);
const btnRightPaginationLoop = document.getElementById(
  "btnRightPaginationLoop"
);
const btnLeftPaginationLoop = document.getElementById("btnLeftPaginationLoop");
const dotsPaginationLoop = document.querySelector("#dotsPaginationLoop");
const TimeSpeedPaginationLoop = 1500;

btnRightPaginationLoop.classList.add("btnRightCssPaginationLoop");
btnLeftPaginationLoop.classList.add("btnLeftCssPaginationLoop");
freshWrapperPaginationLoop.classList.add("wraperPaginationLoop");

_imagesWrapperPaginationLoop.forEach((imageWrap) => {
  imageWrap.classList.add("imagesCssPaginationLoop");
});

let flagRightPaginationLoop = 0;
let transRightNumbPaginationLoop = 0;
let flagRightClickPaginationLoop = 0;
let dotFlagBooleanLoop = true;

let wichImageLoop;
for (let i = 0; i <= _imagesWrapperPaginationLoop.length - 1; i++) {
  dotsPaginationLoop.innerHTML += `<li class="dotsPositionCrLoop dotLoop${
    i + 1
  }"></li>`;
  wichImageLoop =
    _imagesWrapperPaginationLoop[i].getAttribute("data-dotTurnLoop");
}

let dotLoop1 = document.querySelector(".dotLoop1");
let dotLoop2 = document.querySelector(".dotLoop2");
let dotLoop3 = document.querySelector(".dotLoop3");
let dotLoop4 = document.querySelector(".dotLoop4");
let dotLoop5 = document.querySelector(".dotLoop5");

dotLoop1.classList.add("dotActiveLoop");
let _imgNumbLoop;

btnRightPaginationLoop.addEventListener("click", () => {
  if (flagRightClickPaginationLoop == _imagesWrapperPaginationLoop.length - 1) {
    btnRightPaginationLoop.removeEventListener("click", () => {});
  } else {
    flagRightClickPaginationLoop++;
    transRightNumbPaginationLoop =
      transRightNumbPaginationLoop + flagRightPaginationLoop - 100;
    _imagesWrapperPaginationLoop.forEach((item) => {
      item.style.transition = "0.5s all";
      item.style.transform = `translateX(${transRightNumbPaginationLoop}%)`;
    });

    // make dots color

    if (dotFlagBooleanLoop) {
      _imgNumbLoop =
        flagRightClickPaginationLoop - flagLeftClickPaginationLoop + 1;

      // dots get bg
      if ("dotLoop2" == `dotLoop${_imgNumbLoop}`) {
        dotLoop2.classList.add("dotActiveLoop");
        dotLoop1.classList.remove("dotActiveLoop");
        dotLoop3.classList.remove("dotActiveLoop");
        dotLoop4.classList.remove("dotActiveLoop");
        dotLoop5.classList.remove("dotActiveLoop");
      } else if ("dotLoop3" == `dotLoop${_imgNumbLoop}`) {
        dotLoop3.classList.add("dotActiveLoop");
        dotLoop1.classList.remove("dotActiveLoop");
        dotLoop2.classList.remove("dotActiveLoop");
        dotLoop4.classList.remove("dotActiveLoop");
        dotLoop5.classList.remove("dotActiveLoop");
      } else if ("dotLoop4" == `dotLoop${_imgNumbLoop}`) {
        dotLoop4.classList.add("dotActiveLoop");
        dotLoop1.classList.remove("dotActiveLoop");
        dotLoop2.classList.remove("dotActiveLoop");
        dotLoop3.classList.remove("dotActiveLoop");
        dotLoop5.classList.remove("dotActiveLoop");
      } else if ("dotLoop1" == `dotLoop${_imgNumbLoop}`) {
        dotLoop1.classList.add("dotActiveLoop");
        dotLoop4.classList.remove("dotActiveLoop");
        dotLoop2.classList.remove("dotActiveLoop");
        dotLoop3.classList.remove("dotActiveLoop");
        dotLoop5.classList.remove("dotActiveLoop");
      } else if ("dotLoop5" == `dotLoop${_imgNumbLoop}`) {
        dotLoop5.classList.add("dotActiveLoop");
        dotLoop1.classList.remove("dotActiveLoop");
        dotLoop2.classList.remove("dotActiveLoop");
        dotLoop3.classList.remove("dotActiveLoop");
        dotLoop4.classList.remove("dotActiveLoop");
      }
    }
  }
});

let flagLeftClickPaginationLoop = 0;
let flagLeftPaginationLoop = 0;

btnLeftPaginationLoop.addEventListener("click", () => {
  // if click
  flagRightClickPaginationLoop--;
  flagLeftClickPaginationLoop++;

  // dots get bg
  if (dotFlagBooleanLoop) {
    _imgNumbLoop = flagRightClickPaginationLoop + 1;

    if ("dotLoop2" == `dotLoop${_imgNumbLoop}`) {
      dotLoop2.classList.add("dotActiveLoop");
      dotLoop1.classList.remove("dotActiveLoop");
      dotLoop3.classList.remove("dotActiveLoop");
      dotLoop4.classList.remove("dotActiveLoop");
      dotLoop5.classList.remove("dotActiveLoop");
    } else if ("dotLoop3" == `dotLoop${_imgNumbLoop}`) {
      dotLoop3.classList.add("dotActiveLoop");
      dotLoop1.classList.remove("dotActiveLoop");
      dotLoop2.classList.remove("dotActiveLoop");
      dotLoop4.classList.remove("dotActiveLoop");
      dotLoop5.classList.remove("dotActiveLoop");
    } else if ("dotLoop4" == `dotLoop${_imgNumbLoop}`) {
      dotLoop4.classList.add("dotActiveLoop");
      dotLoop1.classList.remove("dotActiveLoop");
      dotLoop2.classList.remove("dotActiveLoop");
      dotLoop3.classList.remove("dotActiveLoop");
      dotLoop5.classList.remove("dotActiveLoop");
    } else if ("dotLoop1" == `dotLoop${_imgNumbLoop}`) {
      dotLoop1.classList.add("dotActiveLoop");
      dotLoop4.classList.remove("dotActiveLoop");
      dotLoop2.classList.remove("dotActiveLoop");
      dotLoop3.classList.remove("dotActiveLoop");
      dotLoop5.classList.remove("dotActiveLoop");
    } else if ("dotLoop5" == `dotLoop${_imgNumbLoop}`) {
      dotLoop5.classList.add("dotActiveLoop");
      dotLoop1.classList.remove("dotActiveLoop");
      dotLoop2.classList.remove("dotActiveLoop");
      dotLoop3.classList.remove("dotActiveLoop");
      dotLoop4.classList.remove("dotActiveLoop");
    }
  }

  //   if click too much and dont have picture
  if (flagRightClickPaginationLoop < 0) {
    btnLeftPaginationLoop.removeEventListener("click", () => {});
    flagRightClickPaginationLoop = 0;
    flagLeftClickPaginationLoop = 0;
    transRightNumbPaginationLoop = 0;
    _imgNumbLoop = 0;
  } else {
    transRightNumbPaginationLoop =
      transRightNumbPaginationLoop + flagLeftPaginationLoop + 100;
    _imagesWrapperPaginationLoop.forEach((item) => {
      item.style.transition = "0.5s all";
      item.style.transform = `translateX(${transRightNumbPaginationLoop}%)`;
    });
  }
});

// auto click
let goToRightPaginationLoop = true;
let statePaginationLoop = true;
setInterval(() => {
  if (goToRightPaginationLoop == true) {
    if (statePaginationLoop) {
      btnRightPaginationLoop.click();
      if (
        flagRightClickPaginationLoop ===
        _imagesWrapperPaginationLoop.length - 1
      ) {
        statePaginationLoop = false;
      }
    } else {
      goToRightPaginationLoop = false;
    }
  } else {
    // click on left
    btnLeftPaginationLoop.click();
    // click when image not exist
    if (transRightNumbPaginationLoop == 0) {
      goToRightPaginationLoop = true;
      statePaginationLoop = true;
    }
  }
}, TimeSpeedPaginationLoop);
