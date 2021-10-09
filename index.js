//----------------------------------------------Task#1

let taskOneDivTrack = document.querySelector(`#taskOneDivTrack`);
let checkDrop = 0;

function changeTrack(event) {
  if (event.target.id === taskOneDivTrack.id) {
    checkDrop = 1;
  }
}
function changeTrackOff(event) {
  if (event.target.id === taskOneDivTrack.id) {
    checkDrop = 0;
  }
}
function onMouseMove(event) {
  if (checkDrop === 1 && event.pageX > 34 && event.pageX < 582) {
    taskOneDivTrack.style.setProperty(`--shiftBlock`, `${event.pageX - 36}px`);
  }
}
taskOneDivTrack.addEventListener(`mousedown`, changeTrack);
taskOneDivTrack.addEventListener(`mouseup`, changeTrackOff);
taskOneDivTrack.addEventListener(`mouseout`, changeTrackOff);
document.addEventListener("mousemove", onMouseMove);

//----------------------------------------------Task#2

let leftArrow = document.querySelector(`#leftArrow`);
let rightArrow = document.querySelector(`#rightArrow`);
let arrSmileFace = document.querySelectorAll(`.smileFace`);
leftArrow.hidden = true;
let count = 0;
function changeImg(event) {
  if (event.target.id === leftArrow.id && arrSmileFace[1].hidden === false) {
    count = 0;
    arrSmileFace[count].hidden = false;
    arrSmileFace[count].nextElementSibling.hidden = true;
    leftArrow.hidden = true;
  } else if (event.target.id === rightArrow.id && arrSmileFace[arrSmileFace.length - 2].hidden === false) {
    count = arrSmileFace.length - 1;
    rightArrow.hidden = true;
    arrSmileFace[count].hidden = false;
    arrSmileFace[count].previousElementSibling.hidden = true;
  } else if (event.target.id === rightArrow.id) {
    count++;
    arrSmileFace[count].hidden = false;
    arrSmileFace[count].previousElementSibling.hidden = true;
    leftArrow.hidden = false;
  } else if (event.target.id === leftArrow.id) {
    count--;
    arrSmileFace[count].hidden = false;
    arrSmileFace[count].nextElementSibling.hidden = true;
    rightArrow.hidden = false;
  }
}
document.addEventListener("click", changeImg);

//----------------------------------------------Task#3

let headerDiv = document.querySelectorAll(`.headerDiv`);
let infoDiv = document.querySelectorAll(`.infoDiv`);
for (let i = 0; i < headerDiv.length; i++) {
  headerDiv[i].id = `headerDiv` + i;
}
for (let i = 0; i < infoDiv.length; i++) {
  infoDiv[i].id = `infoDiv` + i;
  infoDiv[i].hidden = true;
  infoDiv[0].hidden = false;
}
function picNews(event) {
  for (let i = 0; i < headerDiv.length; i++) {
    if (event.target.id === headerDiv[i].id) {
      for (let j = 0; j < infoDiv.length; j++) {
        infoDiv[j].hidden = true;
      }
      infoDiv[i].hidden = false;
    }
  }
}
document.addEventListener("click", picNews);

//----------------------------------------------Task#4

let divTaskFour = document.querySelector(`#divTaskFour`);
let arrPTag = divTaskFour.querySelectorAll(`p`);
for (let i = 0; i < arrPTag.length; i++) {
  arrPTag[i].id = `pTagID` + i;
}
for (let i = 2; i < arrPTag.length; i++) {
  arrPTag[i].hidden = true;
}

let check = 0;

function loadNews(event) {
  if (check < window.pageYOffset) {
    check = window.pageYOffset;
    if (document.documentElement.clientHeight + window.pageYOffset >= document.documentElement.scrollHeight) {
      for (let i = 0; i < arrPTag.length; i++) {
        if (arrPTag[i].hidden === true) {
          arrPTag[i].hidden = false;
          break;
        }
      }
    }
  } else if (check > window.pageYOffset) {
    check = window.pageYOffset;
    if (document.documentElement.clientHeight + window.pageYOffset <= document.documentElement.scrollHeight - 50) {
      for (let i = arrPTag.length - 1; i > 1; i--) {
        if (arrPTag[i].hidden === false) {
          arrPTag[i].hidden = true;
          break;
        }
      }
    }
  }
}
window.addEventListener("scroll", loadNews);

//----------------------------------------------Task#5

let arrThSlot = document.querySelectorAll(`th`);
let generateDate = document.querySelector(`#generateDate`);
let infoDate = document.querySelector(`#infoDate`);
let monthInput = document.querySelector(`#monthInput`);
let yearInput = document.querySelector(`#yearInput`);
let allDays = 0;
let arrMonth = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
for (let i = 7; i < arrThSlot.length; i++) {
  arrThSlot[i].id = `thSlotID` + (i - 7);
  arrThSlot[i].style.height = 30 + `px`;
}

function genDate(event) {
  if (event.target === generateDate) {
    let month = Number(monthInput.value);
    let year = Number(yearInput.value);
    let myDate = new Date(year, month - 1);
    let dayOfWeek = myDate.getDay();
    infoDate.innerHTML = `${arrMonth[month - 1]}, ${yearInput.value}`;
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
      allDays = 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      allDays = 30;
    } else if (month === 2) {
      if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
        allDays = 29;
      } else {
        allDays = 28;
      }
    }
    switch (dayOfWeek) {
      case 0:
        count = 6;
        break;
      case 1:
        count = 0;
        break;
      case 2:
        count = 1;
        break;
      case 3:
        count = 2;
        break;
      case 4:
        count = 3;
        break;
      case 5:
        count = 4;
        break;
      case 6:
        count = 5;
        break;
    }
    let countNextDay = 1;
    for (let i = 7; i < arrThSlot.length; i++) {
      arrThSlot[i].innerHTML = ` `;
    }
    for (let i = 7; i < arrThSlot.length; i++) {
      if (i >= count + 7) {
        for (let j = countNextDay; j <= allDays; j++) {
          countNextDay++;
          arrThSlot[i].innerHTML = j;
          break;
        }
      }
    }
  }
}

document.addEventListener("click", genDate);
