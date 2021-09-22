let stringRandom = document.querySelector(`#inputUser`);
let closeModuleWindow = document.querySelector(`#closeWindow`);
let openModuleWindow = document.querySelector(`#openWindow`);
let windowModale = document.querySelector(`#modalWind`);
let footBallCort = document.querySelector(`#field`);
let ballGet = document.querySelector(`#ballGet`);
let circleRed = document.querySelector(`#circleRed`);
let circleYellow = document.querySelector(`#circleYellow`);
let circleBlue = document.querySelector(`#circleBlue`);
let changeColorCircle = document.querySelector(`#changeColorCircle`);
let book1 = document.querySelector(`#book1`);
let book2 = document.querySelector(`#book2`);
let book3 = document.querySelector(`#book3`);
let book4 = document.querySelector(`#book4`);
let book5 = document.querySelector(`#book5`);
let book6 = document.querySelector(`#book6`);
let listBook = document.querySelector(`#listBook`);
let btn1 = document.querySelector(`#btn1`);
let btn2 = document.querySelector(`#btn2`);
let contentTooltip = document.querySelector(`#contentTooltip`);



//-------------------------------------------------Task#1

function inputRandomString(event) {
    let strCopy = ``;
    for (let i = 0; i < stringRandom.value.length; i++) {
        if (isNaN(stringRandom.value[i]) === true || stringRandom.value[i] === ` `) {
            strCopy = strCopy + stringRandom.value[i];
        }
    }
    stringRandom.value = strCopy;
}
stringRandom.addEventListener(`input`, inputRandomString);

//--------------------------------------------------Task#2

function actionWindow(event) {
    if (event.currentTarget === closeModuleWindow) {
        windowModale.style.display = `none`;
    } else if (event.currentTarget === openModuleWindow) {
        windowModale.style.display = `inherit`;        
    }
}
closeModuleWindow.addEventListener(`click`, actionWindow);
openModuleWindow.addEventListener(`click`, actionWindow);

//--------------------------------------------------Task#3 Работает если не скроллить вниз. Так как привязана к клиентской области)))

function footBall(event) {
    console.log(`x:${event.clientX} y:${event.clientY}`);
    ballGet.style.transition = `all 2s` ;
    ballGet.style.left = `${event.clientX - 15}px`;
    ballGet.style.top = `${event.clientY - 15}px`;
    if (event.clientX > 300 - 15) {
        ballGet.style.left = `270px`;
    }
    if (event.clientX < 15) {
        ballGet.style.left = `0px`;
    }
    if (event.clientY > 600 - 15) {
        ballGet.style.top = `570px`; 
    }
    if (event.clientY < 400 + 15) {
        ballGet.style.top = `400px`;
    }
}
footBallCort.addEventListener(`click`, footBall);

//-------------------------------------------Task#4

function changeColorSemaphore(event) {
    arr = [`red`, `yellow`, `blue`, `gray`];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === circleRed.style.backgroundColor) {
            circleYellow.style.backgroundColor = arr[1];
            circleRed.style.backgroundColor = arr[3];
            break;
        } 
        if (arr[i] === circleYellow.style.backgroundColor) {
            circleYellow.style.backgroundColor = arr[3];
            circleBlue.style.backgroundColor = arr[2];
            break;

        } 
        if (arr[i] === circleBlue.style.backgroundColor) {
            circleBlue.style.backgroundColor = arr[3];
            circleRed.style.backgroundColor = arr[0];
            break;
        }        
    }
}
changeColorCircle.addEventListener(`click`, changeColorSemaphore);

//-------------------------------------------Task#5

function getBook(event) {
    book1.style.backgroundColor = `inherit`;
    book2.style.backgroundColor = `inherit`;
    book3.style.backgroundColor = `inherit`;
    book4.style.backgroundColor = `inherit`;
    book5.style.backgroundColor = `inherit`;
    book6.style.backgroundColor = `inherit`;
    if (event.target === book1 || event.target === book2 || event.target === book3 || event.target === book4 
        || event.target === book5 || event.target === book6) {
        event.target.style.backgroundColor = `orange`;
    }
}
listBook.addEventListener(`click`, getBook);

//-------------------------------------------Task#6

function showTooltip(event) {
    if (event.clientY < 20) {
        const style =document.documentElement.style;
        style.setProperty(`--offset`, `20px`);
    }
    if (event.clientY < 80 && event.clientY > 25) {
        const style =document.documentElement.style;
        style.setProperty(`--offset`, `-28px`);
    }
}
contentTooltip.addEventListener(`mouseover`, showTooltip);
