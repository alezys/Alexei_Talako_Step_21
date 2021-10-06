let input = document.querySelector(`#input`)
let square = document.querySelector(`#square`)
let noteList = document.querySelector(`#noteList`)
let removeCheck = document.querySelector(`#removeCheck`)
let processBar = document.querySelector(`.processBar`)
let arr = []
let arrClose = []
let arrEdit = []
let arrPic = []
let arrInputHidEdit =[]
let countPic = ``;
let countUnPic = ``;

function addNote(event) {
  if (event.target.id === square.id) {
    let div = document.createElement(`div`)
    div.className = `note`
    let inputDivStr = document.createElement(`input`)
    inputDivStr.type = `checkbox`
    inputDivStr.className = `inputDivStr`
    let span = document.createElement(`span`)
    span.className = `noteSpan`
    let inputHidEdit = document.createElement(`input`)
    inputHidEdit.className = `inputHidEdit`
    let symbolDivEdit = document.createElement(`div`)
    symbolDivEdit.className = `symbol`
    let symbolDivClose = document.createElement(`div`)
    symbolDivClose.className = `symbol`
        
    noteList.appendChild(div)
    div.appendChild(inputDivStr)
    div.appendChild(span)
    span.innerHTML = input.value
    div.appendChild(inputHidEdit)
    inputHidEdit.hidden = `true`
    div.appendChild(symbolDivEdit)
    symbolDivEdit.innerHTML = `!`
    div.appendChild(symbolDivClose)
    symbolDivClose.innerHTML = `&#xD7`

    arr.push(div)
    arrClose.push(symbolDivClose)
    arrPic.push(inputDivStr)
    arrEdit.push(symbolDivEdit)
    arrInputHidEdit.push(inputHidEdit)
    
    for (let i = 0; i < arr.length; i++) {
      arr[i].id = `divNote` + i;
    }
    for (let i = 0; i < arrClose.length; i++) {
      arrClose[i].id = `divClose` + i;
    }
    for (let i = 0; i < arrPic.length; i++) {
      arrPic[i].id = `inputPic` + i;
    }
    for (let i = 0; i < arrPic.length; i++) {
      arrPic[i].id = `inputPic` + i;
    }
    for (let i = 0; i < arrEdit.length; i++) {
      arrEdit[i].id = `divEdit` + i;
    }
    for (let i = 0; i < arrInputHidEdit.length; i++) {
      arrInputHidEdit[i].id = `inputHidEdit` + i;
    }
  }
  input.value = ``
}
document.addEventListener(`click`, addNote)

function closeNote(event) {
  for (let i = 0; i < arrClose.length; i++) {
    if (event.target.id === arrClose[i].id) {
      arrClose[i].parentElement.remove();
      arr.slice(i, 1);
      arrClose.slice(i, 1);
      arrPic.slice(i, 1);
    }
  }
}
document.addEventListener(`click`, closeNote)

function picNote(event) {
  let arrPicMas = document.querySelectorAll(`.inputDivStr`)
  for (let i = 0; i < arrPic.length; i++) {
    if (event.target.id === arrPic[i].id && arrPic[i].checked === true) {
      arrPic[i].nextSibling.style.textDecoration = `line-through`;
    } else if (event.target.id === arrPic[i].id && arrPic[i].checked === false) {
      arrPic[i].nextSibling.style.textDecoration = ``;
    } 
    arrPicMas = document.querySelectorAll(`.inputDivStr`)
  }
  if (event.target.id === removeCheck.id) {
    for (let j = 0; j < arrPic.length; j++) {
      if (arrPic[j].checked === true) {
        arrPic[j].parentElement.remove();
      }    
    }
    arrPicMas = document.querySelectorAll(`.inputDivStr`)
  }
  countPic = 0
  countUnPic = 0
  for (let i = 0; i < arrPicMas.length; i++) {
    if (arrPicMas[i].checked === true) {
      countPic++
    }
    if (arrPicMas[i].checked === false) {
      countUnPic++
    }
  }
  let final = (countPic / (countUnPic + countPic)) * 100;
  processBar.style.setProperty('--width-bar', final + '%')
  processBar.previousElementSibling.innerHTML = countPic + ` of ` + (Number(countUnPic + countPic)) + ` tasks done`
}
document.addEventListener(`click`, picNote)

function editSpan(event) {
  for (let i = 0; i < arrEdit.length; i++) {
    if (arrEdit[i].id === event.target.id) {
      arrEdit[i].previousElementSibling.hidden = false
      arrEdit[i].previousElementSibling.previousElementSibling.hidden = true
      arrEdit[i].previousElementSibling.value = arrEdit[i].previousElementSibling.previousElementSibling.innerHTML
    }
  }
}
document.addEventListener(`click`, editSpan)

function editSubmitSpan(event) {
  for (let i = 0; i < arrInputHidEdit.length; i++) {
    if (arrInputHidEdit[i].hidden === false && event.code === `Enter`) {
      arrInputHidEdit[i].hidden = true
      arrInputHidEdit[i].previousElementSibling.hidden = false
      arrInputHidEdit[i].previousElementSibling.innerHTML = arrInputHidEdit[i].value
    }
  }
}
document.addEventListener(`keydown`, editSubmitSpan)