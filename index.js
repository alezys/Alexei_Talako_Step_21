//-------------------------------------------Task#1
let pulp = document.querySelector(`#pulp`);
for (let i = 0; i < pulp.children.length; i++) {
    for (let j = 0; j < pulp.children[i].children.length; j++) {
        let str = pulp.children[i].children[j].textContent;
        if (str.match(/http/gi) !== null) {
            pulp.children[i].children[j].style.borderBottom = `dotted`;
        }
    }
}

//------------------------------------------Task#2

let listDisk = document.querySelector(`#listDisk`);
let spanList = listDisk.getElementsByTagName(`span`);
for (let i = 0; i < spanList.length; i++) {
    spanList[i].id = `spanID` + [i];
}
function textFat(event) {
    for (let i = 0; i < spanList.length; i++) {
        if (spanList[i].id === event.target.id) {
            spanList[i].style.fontWeight = `bold`;
        }
    }
}
function textNormal(event) {
    for (let i = 0; i < spanList.length; i++) {
        if (spanList[i].id === event.target.id) {
            spanList[i].style.fontWeight = `normal`;
        }
    }
}
function textHidden(event) {
    for (let i = 0; i < spanList.length; i++) {
        if (spanList[i].id === event.target.id) {
            let childrenSpan = spanList[i].parentNode.getElementsByTagName(`ul`)
            for (let j = 0; j < childrenSpan.length; j++) {
                if (childrenSpan[j].hidden === false) {
                    childrenSpan[j].hidden = true;
                } else {
                    childrenSpan[j].hidden = false;
                }
            }
        }
    }
}
listDisk.addEventListener(`mouseover`, textFat);
listDisk.addEventListener(`mouseout`, textNormal);
listDisk.addEventListener(`click`, textHidden);

//------------------------------------------Task#3

let bibl = document.querySelector(`#bibl`);
let start = ``;
let spanBooks = bibl.getElementsByTagName(`span`);
for (let i = 0; i < spanBooks.length; i++) {
    spanBooks[i].id = `bookID` + [i];
}
function textPick(event) {
    if (event.ctrlKey !== true && event.shiftKey !== true) {
        for (let i = 0; i < spanBooks.length; i++) {
            if (spanBooks[i].id === event.target.id && spanBooks[i].style.backgroundColor !== `orange`) {
                spanBooks[i].style.backgroundColor = `orange`;
                start = i;
            } else if (spanBooks[i].style.backgroundColor === `orange`) {
                spanBooks[i].style.backgroundColor = `inherit`;
            }
        }
    }
    if (event.ctrlKey === true && event.shiftKey !== true) {
        for (let i = 0; i < spanBooks.length; i++) {
            if (spanBooks[i].id === event.target.id && spanBooks[i].style.backgroundColor !== `orange` && event.ctrlKey === true) {
                spanBooks[i].style.backgroundColor = `orange`;
                start = i;
            } else if (spanBooks[i].id === event.target.id && spanBooks[i].style.backgroundColor === `orange` && event.ctrlKey === true) {
                spanBooks[i].style.backgroundColor = `inherit`;
            }
        }
    }
    if (event.shiftKey === true) {
        for (let i = 0; i < spanBooks.length; i++) {
            if (spanBooks[i].id === event.target.id) {
                if (start > i) {
                    for (let j = i; j < start; j++) {
                        spanBooks[j].style.backgroundColor = `orange`;
                    }
                }
                if (start < i) {
                    for (let j = i; j > start; j--) {
                        spanBooks[j].style.backgroundColor = `orange`;
                    }
                }
            }
        }
    }
}
bibl.addEventListener(`click`, textPick);

//------------------------------------------Task#4

let saveTextDiv = document.querySelector(`#saveTextDiv`);
let contentText = document.querySelector(`#contentText`);
let areaText = document.querySelector(`#areaText`);
let str = ``;
function textSelfHidden(event) {
    if (event.code === `KeyE` && event.ctrlKey === true) {
        event.preventDefault();
    areaText.hidden = false;
    contentText.hidden = true;
}
    if (event.code === `KeyS` && event.ctrlKey === true) {
        event.preventDefault();
        areaText.hidden = true;
        contentText.hidden = false;
        str = areaText.value; 
        contentText.innerText = str;
    }
}
document.addEventListener(`keydown`, textSelfHidden);

//------------------------------------------Task#5 

let listName = document.querySelector(`#listName`);
let row = listName.getElementsByTagName(`tr`);
let column = listName.getElementsByTagName(`th`);

for (let i = 0; i < row.length; i++) {
    row[i].id = `rowID` + [i];
}
for (let i = 0; i < column.length; i++) {
    column[i].id = `columnID` + [i];
}
let unit1 = {
    name: `Mark`,
    lastname: `Zuckerberg`,
    age: `34`,
    company: `Facebook`
}
let unit2 = {
    name: `Larry`,
    lastname: `Page`,
    age: `45`,
    company: `Google`
}
let unit3 = {
    name: `Timothy`,
    lastname: `Cook`,
    age: `57`,
    company: `Apple`
}
let unit4 = {
    name: `Bill`,
    lastname: `Gates`,
    age: `62`,
    company: `Microsoft`
}
let arrPersons = [unit1, unit2, unit3, unit4, ];
function sortNumberMax(a, b) {
    if (a.age > b.age) return 1;
    if (a.age === b.age) return 0;
    if (a.age < b.age) return -1;
}
function sortNumberMin(a, b) {
    if (a.age < b.age) return 1;
    if (a.age === b.age) return 0;
    if (a.age > b.age) return -1;
}
function sortStrNameMax(a, b) {
    if (a.name > b.name) return 1;
    if (a.name === b.name) return 0;
    if (a.name < b.name) return -1;
}
function sortStrNameMin(a, b) {
    if (a.name < b.name) return 1;
    if (a.name === b.name) return 0;
    if (a.name > b.name) return -1;
}
function sortStrLastNameMax(a, b) {
    if (a.lastname > b.lastname) return 1;
    if (a.lastname === b.lastname) return 0;
    if (a.lastname < b.lastname) return -1;
}
function sortStrLastNameMin(a, b) {
    if (a.lastname < b.lastname) return 1;
    if (a.lastname === b.lastname) return 0;
    if (a.lastname > b.lastname) return -1;
}
function sortStrCompanyMax(a, b) {
    if (a.company > b.company) return 1;
    if (a.company === b.company) return 0;
    if (a.company < b.company) return -1;
}
function sortStrCompanyMin(a, b) {
    if (a.company < b.company) return 1;
    if (a.company=== b.company) return 0;
    if (a.company > b.company) return -1;
}

let checkerFirstName = 0;
let checkerLastName = 0;
let checkerAge = 0;
let checkerCompany = 0;

function optomizedCode() {
    let countName = 4;
    let countLastName = 5;
    let countAge = 6;
    let countCompany = 7;
    for (let i = 0; i < arrPersons.length; i++) {
        document.querySelector(`#columnID${countName}`).innerText = arrPersons[i].name;
        document.querySelector(`#columnID${countLastName}`).innerText = arrPersons[i].lastname;
        document.querySelector(`#columnID${countAge}`).innerText = arrPersons[i].age;
        document.querySelector(`#columnID${countCompany}`).innerText = arrPersons[i].company;
        countName = countName + 4;
        countLastName = countLastName + 4;
        countAge = countAge + 4;
        countCompany = countCompany + 4;
    }
}

function sortUnit(event) {
    if (event.target.id === `columnID0` && checkerFirstName === 0) {
        arrPersons.sort(sortStrNameMax);
        optomizedCode();
        checkerFirstName = 1;
    } else if (event.target.id === `columnID0` && checkerFirstName === 1) {
        arrPersons.sort(sortStrNameMin);
        optomizedCode();
        checkerFirstName = 0;
    }
    if (event.target.id === `columnID1` && checkerLastName === 0) {
        arrPersons.sort(sortStrLastNameMax);
        optomizedCode();
        checkerLastName = 1;
    } else if (event.target.id === `columnID1` && checkerLastName === 1) {
        arrPersons.sort(sortStrLastNameMin);
        optomizedCode();
        checkerLastName = 0;
    }
    if (event.target.id === `columnID2` && checkerAge === 0) {
        arrPersons.sort(sortNumberMax);
        optomizedCode();
        checkerAge = 1;
    } else if (event.target.id === `columnID2` && checkerAge === 1) {
        arrPersons.sort(sortNumberMin);
        optomizedCode();
        checkerAge = 0;
    }
    if (event.target.id === `columnID3` && checkerCompany === 0) {
        arrPersons.sort(sortStrCompanyMax);
        optomizedCode();
        checkerCompany = 1;
    } else if (event.target.id === `columnID3` && checkerCompany === 1) {
        arrPersons.sort(sortStrCompanyMin);
        optomizedCode();
        checkerCompany = 0;
    }
}
listName.addEventListener(`click`, sortUnit);

//------------------------------------------Task#6

let innerBlock = document.querySelector(`#innerBlock`);
let squareBlock = document.querySelector(`#squareBlock`);

function changeWindow(event) {
    squareBlock.style.zIndex = 1000;
    document.body.append(squareBlock);
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
        squareBlock.style.left = pageX - ball.offsetWidth / 2 + 'px';
        squareBlock.style.top = pageY - ball.offsetHeight / 2 + 'px';
    }
}
function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
}

}
innerBlock.addEventListener(`mousedown`, changeWindow);
document.addEventListener('mousemove', onMouseMove);

