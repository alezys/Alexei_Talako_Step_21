//---------------------------------Task #1

// function showNumSign(str1) {
//     let arr = str1.split(``);
//     let countStr = 0;
//     let countNum = 0;
//     let countSign = 0;
//     arrNum = arr.slice();
//     for (let i = 0; i < arrNum.length; i++) {
//         if (arrNum[i] !== ` ` && arrNum[i] !== `,` && arrNum[i] !== `.` && isNaN(arrNum[i]) === false) {
//             arrNum[i] = Number(arrNum[i]);
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof(arrNum[i]) === `string` && arr[i] !== `,` && arr[i] !== `'` && arr[i] != `.` && arr[i] !== ` `) {
//             countStr++;
//         } else if ( typeof(arrNum[i]) === `number`) {
//             countNum++;
//         } else if (arr[i] === `'` || arr[i] === `.` || arr[i] === `,` || arr[i] !== ` `) {
//             countSign++;
//         }
//     }
//     document.write(`Number of Letter = ${countStr}<br>Number of Number = ${countNum}<br>Number of Sign = ${countSign}<br>`);
// }
// showNumSign(`Good morning. Hello a wild bird. I'm 33 old years.`);

//------------------------------------------Task N2

// function showStrNum(num) {
//     let arr10 = [`Десять`, `Одиннадцать`, `Двенадцать`, `Тринадцать`, `Четырнадцать`, `Пятнадцать`, `Шеснадцать`, `Семнадцать`, `Восемнадцать`, `Девятнадцать`,];
//     let arr00 = [`Двадцать `, `Тридцать `, `Сорок `, `Пятьдесят `, `Шестьдесят `, `Семдесят `, `Восемдесят `, `Девяносто `,];
//     let arr01 = [`один`, `два`, `три`, `четыре`, `пять`, `шесть`, `семь`, `восемь`, `девять`,];
//     let numStr = ``;
//     if (num >= 10 && num <= 19) {
//         let i = num % 10;
//         numStr = arr10[i];
//     }
//     if (num >= 20 && num <= 99 && num % 10 !== 0) {
//         let i = Math.floor(num / 10) - 2;
//         let j = num % 10 - 1;
//         numStr = arr00[i] + arr01[j];
//     }
//     if (num >= 20 && num <= 99 && num % 10 === 0) {
//         let i = Math.floor(num / 10) - 2;
//         numStr = arr00[i];
//     }
//     document.write(numStr);
// }
// showStrNum(90);

//------------------------------------------Task N3

// function changeLetter(str) {
//     let arr = str.split(``);
//     let arrCopy = []; 
//     for (let i = 0; i < arr.length; i++) {
//         if (isNaN(arr[i]) === true && arr[i].toUpperCase() === arr[i] && arr[i] !== ` `) {
//             arrCopy.push(arr[i].toLowerCase());
//         } else if (isNaN(arr[i]) === true && arr[i].toUpperCase() !== arr[i] && arr[i] !== ` `) {
//             arrCopy.push(arr[i].toUpperCase());
//         } else if (arr[i] === ` `) {
//             arrCopy.push(arr[i]);
//         } else if (isNaN(arr[i]) === false) {
//             arrCopy.push(`_`);
//         } else {
//             arrCopy.push(arr[i]);
//         }
//     }
//     console.log(arrCopy);
//     let str1 = arrCopy.join(``);
//     document.write(str1);
// }
// changeLetter(`Hot summer of 2021 year.`);

//------------------------------------------Task N4

// cssStyle = [`font-size`, `background-color`, `text-align`,];
// function showCamelCase(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let str = arr[i].split(``);
//         for (let j = 0; j < str.length; j++) {
//             if (str[j] === `-`) {
//                 str.splice(j, 1);
//                 str[j] = str[j].toUpperCase();
//             }
//         }
//         arr[i] = str.join(``);
//     }
//     console.log(arr);
// }
// showCamelCase(cssStyle);

//------------------------------------------Task N5

// function showAcronym(str) {
//     let arr = str.split(``);
//     let arrCopy = [];
//     arrCopy.push(arr[0].toUpperCase());
//     console.log(arr);
//     console.log(arrCopy);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === ` `) {
//             arrCopy.push(arr[i + 1].toUpperCase());
//         }
//     }
//     console.log(arrCopy);
// }
// showAcronym(`cascading style sheets`);

//------------------------------------------Task N6

// function showUnionStr(...arr) {
//     console.log(arr);
//     let arrCopy = [];
//     let arrEnd = [];
//     console.log(arrCopy);
//     for (let i = 0; i < arr.length; i++) {
//         arrCopy = arr[i].split(``);
//         for (let j = 0; j < arrCopy.length; j++) {
//             arrEnd.push(arrCopy[j]);            
//         }
//     }
//     arr = arrEnd.join(``);
//     console.log(arr);
// }
// showUnionStr(`Hot summer of 2021 year. `, `I'm an engeneer. `, `Hello Kitty!`);

//------------------------------------------Task N7

// function showCalcStr(str) {
//     let arr = str.split(``);
//     let result = ``;
//     let sign = ``;
//     for (let i = 0; i < arr.length; i++) {
//         if (isNaN(arr[i]) === true) {
//             sign = arr[i];
//         }
//     }
//     let arr0 = str.split(sign);
//     switch (sign) {
//         case `+`:
//             result = Number(arr0[0]) + Number(arr0[1]);
//             break;
//         case `-`:
//             result = arr0[0] - arr0[1];
//             break;
//         case `*`:
//             result = arr0[0] * arr0[1];
//             break;
//         case `/`:
//             result = arr0[0] / arr0[1];
//             break;            
//     }
//     document.write(result);
// }
// showCalcStr(`158+35`);

//------------------------------------------Task N8

// function showAdress(str) {
//     let arr = str.split(`://`);
//     let urlStr = arr[0];
//     let lastStr = arr.splice(1,).join(``).split(`/`);
//     let domen = lastStr[0];
//     lastStr = lastStr.splice(1,);
//     let adress = [];
//     for (let i = 0; i < lastStr.length; i++) {
//         adress.push(`/`);
//         adress.push(lastStr[i]);       
//     }
//     adress = adress.join(``);
//     document.write(`URL: ${urlStr}<br>Domen: ${domen}<br>Adress: ${adress}<br>`);
// }
// showAdress(`https://itstep.org/ua/about/asdasd/asfadf/asdasd`);

//------------------------------------------Task N9

// function showSeparator(str) {
//     let arr = [];
//     let count = ``;
//     for (let i = 0; i <= str.length; i++) {
//         if (isNaN(str[i]) === false) {
//             count = count + str[i];
//             console.log(count);
//         } else {
//             arr.push(count);
//             count = ``;
//         }
//     }
//     console.log(arr);
// }
// showSeparator(`10/08/2020`);

//------------------------------------------Task N10

// function showAbraCadabra(str, strDay, day, month, year) {
//     arr = [];
//     arr = str.split(``);
//     arrNew = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== `%`) {
//             arrNew.push(arr[i]);
//         } else if (arr[i] === `%`) {
//             switch (arr[i + 1]) {
//                 case `1`:
//                     arrNew.push(strDay)
//                     arr.splice(i, 1);
//                     break;
//                 case `2`:
//                     arrNew.push(day)
//                     arr.splice(i, 1);
//                     break;
//                 case `3`:
//                     arrNew.push(month)
//                     arr.splice(i, 1);
//                     break;
//                 case `4`:
//                     arrNew.push(year)
//                     arr.splice(i, 1);
//                     break;     
//             }
//         }       
//     }
//     str = arrNew.join(``);
//     console.log(str);
// }
// showAbraCadabra(`Today is %1 %2.%3.%4`, `Monday`, 10, 8, 2020);



function showAbraCadabra(str, strDay, day, month, year) {
    arr = [];
    arr = str.split(``);
    arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== `%`) {
            arrNew.push(arr[i]);
        } else if (arr[i] === `%`) {
            switch (arr[i + 1]) {
                case `1`:
                    arrNew.push(strDay)
                    arr.splice(i, 1);
                    break;
                case `2`:
                    arrNew.push(day)
                    arr.splice(i, 1);
                    break;
                case `3`:
                    arrNew.push(month)
                    arr.splice(i, 1);
                    break;
                case `4`:
                    arrNew.push(year)
                    arr.splice(i, 1);
                    break;     
            }
        }       
    }
    str = arrNew.join(``);
    console.log(str);
}
showAbraCadabra(`Today is %1 %2.%3.%4`, `Monday`, 10, 8, 2020);