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
