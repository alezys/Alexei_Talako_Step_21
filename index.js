// let car = {  //Задача №1
//     manufacturer: `General Motors`,
//     model: `Pontiac Firebird`,
//     year: 1974,
//     averageSpeed: 120,
// }

// function showCar(car) {
//     document.write(`Manufacturer is ${car.manufacturer}. `);
//     document.write(`Model is ${car.model}. `);
//     document.write(`Year is ${car.year}. `);
//     document.write(`Average speed is ${car.averageSpeed} km/h. `);
// }
// showCar(car);

// function calcTime(car, distance) {
//     let time = distance / car.averageSpeed;
//     console.log(time);
//     if (time > 4) {
//         time = Math.floor(time / 4) + time;
//         console.log(time);
//     }
//     document.write(`Time for length of way ${distance} is ${time} hour.`);
// }
// calcTime(car, 500);

// let fractionOne = {  //Задача №2
//     num: 12,
//     term: 3, 
// }
// let fractionTwo = {
//     num: 9,
//     term: 6, 
// }
// function calcSum(fractionOne, fractionTwo) {
//     if (fractionOne.term != fractionTwo.term) {
//         let termAll = fractionOne.term * fractionTwo.term;
//         let numOne = fractionOne.num * fractionTwo.term;
//         let numTwo = fractionTwo.num * fractionOne.term;
//         let sumNum = +(numOne + numTwo);
//         console.log(`Sum of fractions: ${fractionOne.num}/${fractionOne.term} + ${fractionTwo.num}/${fractionTwo.term} = ${sumNum} / ${termAll}`);
//     } else {
//     sumNum = fractionOne.num + fractionTwo.num;
//     termAll = fractionOne.term;
//     console.log(`Sum of fractions: ${fractionOne.num}/${fractionOne.term} + ${fractionTwo.num}/${fractionTwo.term} = ${sumNum} / ${termAll}`);
//     }
// }
// calcSum(fractionOne, fractionTwo);

// function calcSubtraction(fractionOne, fractionTwo) {
//     if (fractionOne.term != fractionTwo.term) {
//         let termAll = fractionOne.term * fractionTwo.term;
//         let numOne = fractionOne.num * fractionTwo.term;
//         let numTwo = fractionTwo.num * fractionOne.term;
//         let maxNum = (numOne > numTwo) ? numOne : numTwo;
//         let minNum = (numOne < numTwo) ? numOne : numTwo;
//         let subNum = maxNum - minNum;
//         console.log(`Subtraction of fractions: ${fractionOne.num}/${fractionOne.term} - ${fractionTwo.num}/${fractionTwo.term} = ${subNum} / ${termAll}`);
//     } else {
//     subNum = numOne - numTwo;
//     termAll = fractionOne.term;
//     console.log(`Subtraction of fractions: ${fractionOne.num}/${fractionOne.term} - ${fractionTwo.num}/${fractionTwo.term} = ${subNum} / ${termAll}`);
//     }
// }
// calcSubtraction(fractionOne, fractionTwo);

// function calcMultiply(fractionOne, fractionTwo) {
//     let numAll = fractionOne.num * fractionTwo.num;
//     let termAll = fractionTwo.term * fractionOne.term;
//     console.log(`Subtraction of fractions: ${fractionOne.num}/${fractionOne.term} X ${fractionTwo.num}/${fractionTwo.term} = ${numAll} / ${termAll}`);
// }
// calcMultiply(fractionOne, fractionTwo);

// function calcDivision(fractionOne, fractionTwo) {
//     let numAllDiv = fractionOne.num * fractionTwo.term;
//     let termAllDiv = fractionOne.term * fractionTwo.num;
//     console.log(`Division of fractions: ${fractionOne.num}/${fractionOne.term} % ${fractionTwo.num}/${fractionTwo.term} = ${numAllDiv} / ${termAllDiv}`);
// }
// calcDivision(fractionOne, fractionTwo);

// function showShortFraction(a, b) {
//     if (a > b && a % b != 0) {
//         totalNum = Math.floor(a / b);
//         remainderNum = a % b;
//         console.log(totalNum);
//         console.log(remainderNum);
//         console.log(b);        
//         let i = ``;
//         for (i = remainderNum; i != 0; i--){ 
//             if (b % i === 0) {
//                 if (remainderNum % i === 0) {
//                     console.log(i);
//                     break;
//                 }
//             }
//         }
//         let finalNum = remainderNum / i;
//         let finalTerm = b / i;
//         console.log(`Shorted fraction: (${totalNum}) ${finalNum} / ${finalTerm}`);
//     } else if (a > b && a % b === 0) {
//         a = a / b;
//         console.log(`Shorted fraction: (${a})`);
//     } else if (a === b) {
//         a = 1;
//         console.log(`Shorted fraction: (${a})`);
//     } else if (a < b) {
//         let numMin = a;
//         for (a; a != 0; a--) {
//             if (b % a === 0) {
//                 if (numMin % a === 0) {
//                     console.log(a);
//                     break;                       
//                 }
//             }
//         }
//         finalNum = numMin / a;
//         finalTerm = b / a;
//         console.log(`Shorted fraction: ${finalNum} / ${finalTerm}`);    
//     } 
// }
// showShortFraction(fractionOne.num, fractionOne.term);
// showShortFraction(fractionTwo.num, fractionTwo.term);
// document.write(fractionTwo.num);

let time = {  //Задача №3
    hour: 2,
    min: 34,
    sec: 59,
}

function timeShow(hour, min, sec) {
    if (time.hour <= 9) {
        time.hour = `0` + time.hour;
    }
    if (time.min === undefined) {
        time.min = `00`;
    } else if (time.min <= 9) {
        time.min = `0` + time.min;
    }
    if (time.sec === undefined) {
        time.sec = `00`;
    } else if (time.sec <= 9) {
        time.sec = `0` + time.sec;      
    }
    document.write(`${time.hour}:${time.min}:${time.sec} </br>`);
}
// timeShow(time);

// function changeSec(sec) {
//     time.sec += sec;
//     if (time.sec >= 60) {
//         time.min = time.min + Math.floor(time.sec / 60); 
//         time.sec = time.sec % 60;
//         if (time.min >= 60) {
//             time.hour = time.hour + Math.floor(time.min / 60); 
//             time.min = time.min % 60;
//                if (time.hour >= 24) {
//                     time.hour = time.hour % 24; 
//                }
//         }
//     }
// }
// changeSec(1000000);
// timeShow(time);

// function changeMin(min) {
//     time.min += min;
//     if (time.min >= 60) {
//         time.hour = time.hour + Math.floor(time.min / 60); 
//         time.min = time.min % 60;
//             if (time.hour >= 24) {
//                 time.hour = time.hour % 24; 
//             }
//     }
// }
// changeMin(12314);
// timeShow(time);

function changeHour(hour) {
    time.hour += hour;
    if (time.hour >= 24) {
        time.hour = time.hour % 24; 
    }
}
changeHour(9);
timeShow(time);