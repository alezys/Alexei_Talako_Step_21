// function compareNum(num1, num2) { // Задача N1
//     if (num1 < num2) {
//         return alert(`-1`);
//     } else if (num1 > num2) {
//         return alert(`+1`);
//     } else {
//         return alert(`0`);
//     }
// }
// compareNum(2, 3);

// function factorialNum(num) { // Задача N2
//     let result = 1;
//     while (num != 0) {
//         let count = result * num;
//         num--;
//         result = count;
//     }
//     return alert(result);
// }
// factorialNum(5);

// function numAdd(num1, num2, num3) { // Задача N3
//     num1 = String(num1);
//     let result = num1 + num2 + num3;
//     result = Number(result);
//     return alert(`${result}`);
// }
// numAdd(1, 2, 3);

// function squareFig(num1, num2) { // Задача N4
//     let square;
//     if (num2 === undefined) {
//         square = num1 ** 2;
//     } else {
//         square = num1 * num2;
//     }
//     alert(square);
// }
// squareFig(3);

// function adjectiveNum(num) { // Задача N5
//     let num0 = num;
//     let count = 0;
//     do {
//         num--;
//         if (num0 % num === 0) {
//             count = +(count + num);
//         }
//     } while (num != 0);
//     let final = (num0 === count) ? `adjective` : `not adjective`;
//     alert(final);
//     // document.write(count); // CHECKING!!!
// }
// adjectiveNum(496);


// function adjectiveNum(num) { // Задача N6
//     let num0 = num;
//     let count = 0;
//     do {
//         num--;
//         if (num0 % num === 0) {
//             count = +(count + num);
//         }
//     } while (num != 0);
//     let final = (num0 === count) ? document.write(`The number ${num0} is adjective, `) : ``;
// }
// function adjectiveRateNum(min, max) {
//     for (max; max >= min; max--) {
//         adjectiveNum(max);      
//     }
// }
// adjectiveRateNum(1, 500);

// function timeShow(hour, min, sec) { //Задача №7
//     if (hour <= 9) {
//         hour = `0` + hour;
//     }
//     if (min === undefined) {
//         min = `00`;
//     } else if (min <= 9) {
//         min = `0` + min;
//     }
//     if (sec === undefined) {
//         sec = `00`;
//     } else if (sec <= 9) {
//         sec = `0` + sec;      
//     }
//     alert(`${hour}:${min}:${sec}`);
// }
// timeShow(12, 20, 20);
 
// function secShow(hour, min, sec) { //Задача №8
//     let secAll = sec + Number(min) * 60 + Number(hour) * 3600;
//     alert(`All seconds = ${secAll}`);
//     return secAll;
// }
// secShow(20, 12, 35);
 


// function timeShow(hour, min, sec) { //Задача №9
//     if (hour <= 9) {
//         hour = `0` + hour;
//     }
//     if (min === undefined) {
//         min = `00`;
//     } else if (min <= 9) {
//         min = `0` + min;
//     }
//     if (sec === undefined) {
//         sec = `00`;
//     } else if (sec <= 9) {
//         sec = `0` + sec;      
//     }
//     document.write(`${hour}:${min}:${sec}`);
// }
// function timeAllShow(secAll) { 
//     hour = Math.floor(secAll / 3600);
//     min = Math.floor((secAll % 3600) / 60);
//     sec = secAll % 3600 % 60;
//     return hour, min, sec;
// }
// timeAllShow(7265);
// timeShow(hour, min, sec);


function secShow(hour, min, sec) { //Задача №10
    let secAll = sec + Number(min) * 60 + Number(hour) * 3600;
    document.write(`All seconds = ${secAll}. `);
    return secAll;
}
function timeAllShow(secAll) { 
    let hour0 = Math.floor(secAll / 3600);
    let min0 = Math.floor((secAll % 3600) / 60);
    let sec0 = secAll % 3600 % 60;
    document.write(`Translate : ${hour0}, ${min0}, ${sec0} `);
    return [hour0, min0, sec0];
}
function timeShow(hour0, min0, sec0) { 
    if (hour0 <= 9) {
        hour0 = `0` + hour0;
    }
    if (min0 === undefined) {
        min0 = `00`;
    } else if (min0 <= 9) {
        min0 = `0` + min0;
    }
    if (sec0 === undefined) {
        sec0 = `00`;
    } else if (sec0 <= 9) {
        sec0 = `0` + sec0;      
    }
    document.write(`Final time --- ${hour0}:${min0}:${sec0}`);
}
function dataShow(hour, min, sec, hour1, min1, sec1) {
    let data = Math.abs(secShow(hour, min, sec) - secShow(hour1, min1, sec1));
    document.write(`Difference is ${data} sec. `);
    let [hour0, min0, sec0] = timeAllShow(data);
    timeShow(hour0, min0,sec0);
}
dataShow(3, 55, 17, 8, 32, 35);