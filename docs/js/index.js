// select

let _imagesWrapperDef = document.querySelectorAll(".freshSwiperDef");
let freshWrapperDef = document.querySelector(".freshWrapperDef");
const btnRightDefault = document.getElementById("btnRightDefault");
const btnLeftDefault = document.getElementById("btnLeftDefault");

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
const btnRightDefaultLoop = document.getElementById("btnRightDefaultLoop");
const btnLeftDefaultLoop = document.getElementById("btnLeftDefaultLoop");
const TimeSpeedDefLoop = 1500;

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
const btnRightPagination = document.getElementById("btnRightPagination");
const btnLeftPagination = document.getElementById("btnLeftPagination");
const dotsPagination = document.querySelector("#dotsPagination");

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

let wichImage;
for (let i = 0; i <= _imagesWrapperPagination.length - 1; i++) {
  dotsPagination.innerHTML += `<li class="dotsPositionCr dot${i + 1}"></li>`;
  wichImage = _imagesWrapperPagination[i].getAttribute("data-dotTurn");
  console.log(i);
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

