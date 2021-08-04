// let yourAge = +prompt(`How old are you?`);
// if (yourAge <= 12) {
//   alert(`You are child`);
// } else if (yourAge <= 18) {
//   alert(`You are teenager`);
// } else if (yourAge <= 60) {
//   alert(`You are adult`);
// } else {
//   alert(`You are old fart`);
// }



// let symbol = +prompt(`Enter symbol`);
// switch (symbol) {
// 	case 1:
// 		alert(`!`);
// 		break;
// 	case 2:
// 		alert(`@`);
// 		break;
// 	case 3:
// 		alert(`#`);
// 		break;
// 	case 4:
// 		alert(`$`);
// 		break;
// 	case 5:
// 		alert(`%`);
// 		break;
// 	case 6:
// 		alert(`^`);
// 		break;
// 	case 7:
// 		alert(`&`);
// 		break;
// 	case 8:
// 		alert(`*`);
// 		break;
// 	case 9:
// 		alert(`(`);
// 		break;
// 	case 0:
// 		alert(`)`);
// 		break;
// }



// let number = +prompt(`Enter number`);
// let a = Math.floor(number / 100);
// let b = Math.floor((number % 100) / 10);
// let c = number % 10;
// if (a===b) {
// 	alert(`Equal`);
// } else if (a===c) {
// 	alert(`Equal`);
// } else if (b===c) {
// 	alert(`Equal`);
// } else {
// 	alert(`No equal`);
// }



// let yourAge = +prompt(`Enter age.`);
// if (yourAge % 400 === 0 || yourAge % 4 === 0 && yourAge % 100 != 0) {
//     alert(`It's leap age.`);
// } else {
//     alert(`It's not leap age.`);
// }



// let number = +prompt(`Enter number`);
// let a = Math.floor(number / 10000);
// let b = Math.floor(number % 10000 / 1000);
// let d = Math.floor(number % 100 / 10);
// let e = Math.floor(number % 10);
// if (a === e && b === d) {
//     alert(`It's palindrome`);
// } else {
//     alert(`It's not palindrome`);
// }



// let dollars = +prompt(`Enter number of dollars`);
// const money = prompt(`Enter type of money: EUR, UAN, AZN`);
// switch (money) {
//     case `EUR`:
//         alert(`${dollars / 1.19}`);
//         break;
//     case `UAN`:
//         alert(`${dollars / 0.15}`);
//         break;
//     case `AZN`:
//         alert(`${dollars / 0.59}`);
//         break;    
// }



// let cost = +prompt(`Enter cost`);
// if (200 <= cost && cost <= 300) {
//     alert(`Your final cost = ${cost * 0.97}`);
// } else if (301 <= cost && cost <= 500) {
//     alert(`Your final cost = ${cost * 0.95}`);    
// } else if (501 <= cost) {
//     alert(`Your final cost = ${cost * 0.93}`);    
// } else {
//     alert(`Your final cost = ${cost}`);
// }



// let perimeterCircle = +prompt(`Enter perimeter of circle`);
// let perimeterSquare = +prompt(`Enter perimeter of square`);
// let result = (perimeterCircle / Math.PI <= perimeterSquare / 4) ? `yes` : `no`;
// alert(result); 



// let questionOne = prompt(`Are you man? (yes, no, I don't know):`);
// let questionTwo = prompt(`Do you like JS? (yes, no, I don't know):`);
// let questionThree = prompt(`Do you want learn JS? (yes, no, I don't know):`);
// resultOne = (questionOne == `yes`) ? 2 : 0;
// resultTwo = (questionTwo == `yes`) ? 2 : 0;
// resultThree = (questionThree == `yes`) ? 2 : 0;
// alert(`Your final result is: ${resultOne + resultTwo + resultThree}`);



let day = +prompt(`Enter day`);
let month = +prompt(`Enter month`);
let year = +prompt(`Enter year`);
if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
	if (day === 31 && month === 12) {
		alert(`day 1`);
		alert(`month 1`);
		alert(`year ${year + 1}`);
	} else if (day === 31) {
		alert(`day 1`);
		alert(`month ${month + 1}`);
		alert(`year ${year}`);
	}
	else {
		alert(`day ${day + 1}`);
		alert(`month ${month}`);
		alert(`year ${year}`);
	}
}
else if (month === 4 || month === 6 || month === 9 || month === 11) {
	if (day === 30) {
		alert(`day 1`);
		alert(`month ${month + 1}`);
		alert(`year ${year}`);
	} else {
		alert(`day ${day + 1}`);
		alert(`month ${month}`);
		alert(`year ${year}`);
	}
}
else if (month === 2) {
	if (year % 400 === 0 || year % 4 === 0 && year % 100 != 0) {
		if (day === 29) {
			alert(`day 1`);
			alert(`month 3`);
			alert(`year ${year}`);
		} else {
			alert(`day ${day + 1}`);
			alert(`month ${month}`);
			alert(`year ${year}`);
		}
	} else {
		if (day === 28) {
			alert(`day 1`);
			alert(`month 3`);
			alert(`year ${year}`);
		} else {
			alert(`day ${day + 1}`);
			alert(`month ${month}`);
			alert(`year ${year}`);
		}
	}
}