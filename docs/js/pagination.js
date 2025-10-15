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
