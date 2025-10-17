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

/////////////////////////////////////////////////////////// slider default Loop

let _imagesWrapperDefLoop = document.querySelectorAll(".freshSwiperDefLoop");
let freshWrapperDefLoop = document.querySelector(".freshWrapperDefLoop");
let btnRightDefaultLoop = document.getElementById("btnRightDefaultLoop");
let btnLeftDefaultLoop = document.getElementById("btnLeftDefaultLoop");
let TimeSpeedDefLoop = 1500;

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

/////////////////////////////////////////////////////////// slider default Loop end

/////////////////////////////////////////////////////////////////// Pagination

let _imagesWrapperPagination = document.querySelectorAll(
  ".freshSwiperPagination"
);
let freshWrapperPagination = document.querySelector(".freshWrapperPagination");
let btnRightPagination = document.getElementById("btnRightPagination");
let btnLeftPagination = document.getElementById("btnLeftPagination");
let dotsPagination = document.querySelector("#dotsPagination");

btnRightPagination.classList.add("btnRightCssPagination");
btnLeftPagination.classList.add("btnLeftCssPagination");
freshWrapperPagination.classList.add("wraperPagination");

_imagesWrapperPagination.forEach((imageWrap) => {
  imageWrap.classList.add("imagesCssPagination");
});

let flagRightPagination = 0;
let transRightNumbPagination = 0;
let flagRightClickPagination = 0;
let dotFlagBoolean = true;

let wichImagePagination;
for (let i = 0; i <= _imagesWrapperPagination.length - 1; i++) {
  dotsPagination.innerHTML += `<li class="dotsPositionCr dot${i + 1}"></li>`;
  wichImagePagination =
    _imagesWrapperPagination[i].getAttribute("data-dotTurn");
}

let dot1 = document.querySelector(".dot1");
let dot2 = document.querySelector(".dot2");
let dot3 = document.querySelector(".dot3");
let dot4 = document.querySelector(".dot4");

dot1.classList.add("dotActive");
let _imgNumb;
btnRightPagination.addEventListener("click", () => {
  if (flagRightClickPagination == _imagesWrapperPagination.length - 1) {
    btnRightPagination.removeEventListener("click", () => {});
  } else {
    flagRightClickPagination++;
    transRightNumbPagination =
      transRightNumbPagination + flagRightPagination - 100;
    _imagesWrapperPagination.forEach((item) => {
      item.style.transition = "0.5s all";
      item.style.transform = `translateX(${transRightNumbPagination}%)`;
    });

    // make dots color

    if (dotFlagBoolean) {
      _imgNumb = flagRightClickPagination - flagLeftClickPagination + 1;

      // dots get bg
      if ("dot2" == `dot${_imgNumb}`) {
        dot2.classList.add("dotActive");
        dot1.classList.remove("dotActive");
        dot3.classList.remove("dotActive");
        dot4.classList.remove("dotActive");
      } else if ("dot3" == `dot${_imgNumb}`) {
        dot3.classList.add("dotActive");
        dot1.classList.remove("dotActive");
        dot2.classList.remove("dotActive");
        dot4.classList.remove("dotActive");
      } else if ("dot4" == `dot${_imgNumb}`) {
        dot4.classList.add("dotActive");
        dot1.classList.remove("dotActive");
        dot2.classList.remove("dotActive");
        dot3.classList.remove("dotActive");
      } else if ("dot1" == `dot${_imgNumb}`) {
        dot1.classList.add("dotActive");
        dot4.classList.remove("dotActive");
        dot2.classList.remove("dotActive");
        dot3.classList.remove("dotActive");
      }
    }
  }
});

let flagLeftClickPagination = 0;
let flagLeftPagination = 0;

btnLeftPagination.addEventListener("click", () => {
  // if click
  flagRightClickPagination--;
  flagLeftClickPagination++;

  // dots get bg
  if (dotFlagBoolean) {
    _imgNumb = flagRightClickPagination + 1;

    if ("dot2" == `dot${_imgNumb}`) {
      dot2.classList.add("dotActive");
      dot1.classList.remove("dotActive");
      dot3.classList.remove("dotActive");
      dot4.classList.remove("dotActive");
    } else if ("dot3" == `dot${_imgNumb}`) {
      dot3.classList.add("dotActive");
      dot1.classList.remove("dotActive");
      dot2.classList.remove("dotActive");
      dot4.classList.remove("dotActive");
    } else if ("dot4" == `dot${_imgNumb}`) {
      dot4.classList.add("dotActive");
      dot1.classList.remove("dotActive");
      dot2.classList.remove("dotActive");
      dot3.classList.remove("dotActive");
    } else if ("dot1" == `dot${_imgNumb}`) {
      dot1.classList.add("dotActive");
      dot4.classList.remove("dotActive");
      dot2.classList.remove("dotActive");
      dot3.classList.remove("dotActive");
    }
  }

  //   if click too much and dont have picture
  if (flagRightClickPagination < 0) {
    btnLeftPagination.removeEventListener("click", () => {});
    flagRightClickPagination = 0;
    flagLeftClickPagination = 0;
    transRightNumbPagination = 0;
    _imgNumb = 0;
  } else {
    transRightNumbPagination =
      transRightNumbPagination + flagLeftPagination + 100;
    _imagesWrapperPagination.forEach((item) => {
      item.style.transition = "0.5s all";
      item.style.transform = `translateX(${transRightNumbPagination}%)`;
    });
  }
});

/////////////////////////////////////////////////////////////////// Pagination end

/////////////////////////////////////////////////////////////////// Pagination Loop

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

///////////////////////////////////////////////////////// Pagination Loop end

///////////////////////////////////////////////////////// efect overflow

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

///////////////////////////////////////////////////////// efect overflow end

///////////////////////////////////////////////////////// efect overflow Loop

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

///////////////////////////////////////////////////////// efect overflow Loop end

/////////////////////////////////////////////////////// Carousel Slider

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

  let dataTartibCarouselSlider1 =
    imgCarouselSlider1.getAttribute("data-tartib");
  let dataTartibCarouselSlider2 =
    imgCarouselSlider2.getAttribute("data-tartib");
  let dataTartibCarouselSlider3 =
    imgCarouselSlider3.getAttribute("data-tartib");

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

  let dataTartibCarouselSlider1 =
    imgCarouselSlider1.getAttribute("data-tartib");
  let dataTartibCarouselSlider2 =
    imgCarouselSlider2.getAttribute("data-tartib");
  let dataTartibCarouselSlider3 =
    imgCarouselSlider3.getAttribute("data-tartib");

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
/////////////////////////////////////////////////////// Carousel Slider end

/////////////////////////////////////////////////////// Carousel Slider Loop

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

/////////////////////////////////////////////////////// Carousel Slider Loop end

/////////////////////////////////////////////////////// Carousel Slider 7 images

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

/////////////////////////////////////////////////////// Carousel Slider 7 end

/////////////////////////////////////////////////////// Carousel Slider 7 Loop images

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

/////////////////////////////////////////////////////// Carousel Slider 7 Loop end
