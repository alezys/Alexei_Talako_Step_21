// let numberOne = +prompt(`Enter first number`); // Задача №1
// let numberTwo = +prompt(`Enter second number`);
// let a = (numberOne > numberTwo) ? numberTwo : numberOne;
// let b = (numberOne > numberTwo) ? numberOne : numberTwo;
// let i = b - 1;
// resultFinal = ``;
// while (i > a + 1) { // крайние точки диапазона не включал
// 	result = i + i - 1; 
// 	resultFinal = +(resultFinal + result);
// 	document.write(` ${result} +`);
// 	i--;
// }
// document.write(` = ${resultFinal}`);

// let numberOne = +prompt(`Enter first number`); // Задача №1 (вариант с крайними точками диапазона)
// let numberTwo = +prompt(`Enter second number`);
// let a = (numberOne > numberTwo) ? numberTwo : numberOne;
// let b = (numberOne > numberTwo) ? numberOne : numberTwo;
// let i = b;
// resultFinal = ``;
// while (i > a) { // крайние точки диапазона
// 	result = i + i - 1; 
// 	resultFinal = +(resultFinal + result);
// 	document.write(` ${result} +`);
// 	i--;
// }
// document.write(` = ${resultFinal}`);

// let numberOne = +prompt(`Enter first number`); // Задача №2
// let numberTwo = +prompt(`Enter second number`);
// let a = (numberOne > numberTwo) ? numberTwo : numberOne;
// let b = (numberOne > numberTwo) ? numberOne : numberTwo;
// let i = a;
// resultFinal = i;
// while (b % i != 0 || a % i != 0) {
// 	i--;
// 	resultFinal = i;
// }
// document.write(` Greatest common divisor = ${resultFinal}`);

// let numberOne = +prompt(`Enter first number`); // Задача №3
// let i = numberOne;
// for (i; i != 0; i--) {
// 	if (numberOne % i === 0) {
// 		document.write(` Divisor = ${i}`);
// 	}
// }

// let numberOne = +prompt(`Enter first number`); // Задача №4
// let i = 10;
// resultFinal = 1;
// if (numberOne < i) {
// 		document.write(` Number of sign = 1`);
// } else {
// 	for (i; Math.floor(numberOne / i) != 0; i = i * 10) {
// 		result = i / i;
// 		resultFinal = +(resultFinal + result);
// 	}
// 	document.write(` Number of sign = ${resultFinal}`);
// }

// let i = 10; // Задача №5
// let plusFinal = ``;
// let minusFinal = ``;
// let zeroFinal = ``;
// let evenFinal = ``;
// let oddFinal = ``;
// while (i > 0) {
// 	let num = +prompt(`Enter number`);
// 	let plus = (num > 0) ? 1 : 0;
// 	plusFinal = +(plusFinal + plus);
// 	let minus = (num < 0) ? 1 : 0;
// 	minusFinal = +(minusFinal + minus);
// 	let zero = (num === 0) ? 1 : 0;
// 	zeroFinal = +(zeroFinal + zero);
// 	let even = (num % 2 === 0) ? 1 : 0;
// 	evenFinal = +(evenFinal + even);
// 	let odd = (num % 2 != 0) ? 1 : 0;
// 	oddFinal = +(oddFinal + even);
// 	i--;
// }
// document.write(` Number of plus = ${plusFinal}`);
// document.write(` Number of minus = ${minusFinal}`);
// document.write(` Number of zero = ${zeroFinal}`);
// document.write(` Number of even = ${evenFinal}`);
// document.write(` Number of odd = ${oddFinal}`);


// let result = ``; // Задача №6
// let question = ``;
// do {
// 	let numberOne = +prompt(`Enter first number`);
// 	let numberTwo = +prompt(`Enter second number`);
// 	let sign = prompt(`Enter sign (/, *, -, +):`);
// 	switch (sign) {
// 		case `/`:
// 			result = +(numberOne / numberTwo);
// 			break;
// 		case `*`:
// 			result = +(numberOne * numberTwo);
// 			break;	
// 		case `-`:
// 			result = +(numberOne - numberTwo);
// 			break;
// 		case `+`:
// 			result = +(numberOne + numberTwo);
// 			break;		
// 	}
// 	alert(`Decision = ${result}`);
// 	question = prompt(`Do you want more? (yes or no)`);
// } while (question === `yes`);

// let num = +prompt(`Enter number`); // Задача №7
// let numShift = +prompt(`Enter number of shift`);
// let result = num;
// let count = ``;
// while (result > 10 ** numShift) {
// 	result = Math.floor(result * 0.1);
// 	count = +(count + 1);
// }
// let resultEnd = num % 10 ** count;
// let finalSolution = String(resultEnd) + String(result);
// document.write(` Result = ${result}`); // проверки каждого шага
// document.write(` Count = ${count}`);
// document.write(` ResultEnd = ${resultEnd}`);
// document.write(` FinalSolution = ${finalSolution}`); String

// let i = 1; // Задача №8
// let count = ``;
// do {
// 	count = +(count + 1);
// 	switch (count) {
// 		case 1:
// 			dayOfWeek = `Monday`;
// 			break;
// 		case 2:
// 			dayOfWeek = `Tuesday`;
// 			break;
// 		case 3:
// 			dayOfWeek = `Wednesday`;
// 			break;
// 		case 4:
// 			dayOfWeek = `Thursday`;
// 			break;
// 		case 5:
// 			dayOfWeek = `Friday`;
// 			break;
// 		case 6:
// 			dayOfWeek = `Saturday`;
// 			break;
// 		case 7:
// 			dayOfWeek = `Sunday`;
// 			break;		
// 	}
// 	i = prompt(`${dayOfWeek}. Do you want to see next day?`, ``);
// 	if (count === 7) {
// 		count = ``;
// 	}
// } while (i === ``);

// let i = 2; // Задача №9
// let count = ``;
// let result = ``;
// for (i; i <= 9; i++) {
// 	count = +(count + 1);
// 	switch (count) {
// 		case count:
// 			result = i * 1;
// 			document.write(`${i} X 1 = ${result}|||`);
// 		case count:
// 			result = i * 2;
// 			document.write(`${i} X 2 = ${result}|||`);
// 		case count:
// 			result = i * 3;
// 			document.write(`${i} X 3 = ${result}|||`);
// 		case count:
// 			result = i * 4;
// 			document.write(`${i} X 4 = ${result}|||`);
// 		case count:
// 			result = i * 5;
// 			document.write(`${i} X 5 = ${result}|||`);
// 		case count:
// 			result = i * 6;
// 			document.write(`${i} X 6 = ${result}|||`);
// 		case count:
// 			result = i * 7;
// 			document.write(`${i} X 7 = ${result}|||`);
// 		case count:
// 			result = i * 8;
// 			document.write(`${i} X 8 = ${result}|||`);
// 		case count:
// 			result = i * 9;
// 			document.write(`${i} X 9 = ${result}|||`);
// 		case count:
// 			result = i * 10;
// 			document.write(`${i} X 10 = ${result}|||`);
// 	}
// }

let start = 0	// Задача №10
let end = 100
let supposedNumber = ``
let isGuessed = false
alert(`Think of number ${start} do ${end}`)
while (isGuessed === false) {
  supposedNumber = Math.round((start + end) / 2)
  const answer = prompt(`Your number is '<', '>' or '==' ${supposedNumber}`)
  if (answer === '==') {
    alert('Yes!!!')
    isGuessed = true
  } else if (answer === '<') {
    end = supposedNumber
  } else if (answer === '>') {
    start = supposedNumber
  } else {
    break
  }
}
