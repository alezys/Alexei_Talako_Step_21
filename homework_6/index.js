// let yourName = prompt(`What your name`);
// alert(`Hello, ${yourName}!`);

// const currentYear = 2021;
// let yourYear = prompt(`When do you born?`);
// alert(`You are ${currentYear - yourYear} years!`);

// let lengthSquare = prompt(`What is the length of the square?`);
// alert(`The perimeter of the square is ${lengthSquare * 4}.`);

// let radiusCircle = prompt(`What is the radius of the circle?`);
// alert(`The area of the circle is ${Math.PI * radiusCircle ** 2}.`);

// let distance = prompt(`What is the distance (km) between two town?`);
// let timeArrive = prompt(`In what time (hour/s)`);
// alert(`Speed is ${distance / timeArrive} km/h.`);

// const currentCourse = 0.84;
// let yourDollars = prompt(`How many have you dollars?`);
// alert(`It's ${Math.floor(currentCourse * yourDollars)} euro!`);

// let fleshMemory = prompt(`How much memory (Gb) in the flesh cart?`);
// const yourFile = 820;
// alert(`Cart has ${Math.floor(fleshMemory * 1000 / yourFile)} file/s`);

// let costChocolate = prompt(`How much is a chocolate (dollar/s)?`);
// let yourMoney = prompt(`How much money (dollar/s)?`);
// alert(`You can buy ${Math.floor(yourMoney / costChocolate)} chocolate/s`);
// alert(`Your remaining money is ${Math.floor(yourMoney % costChocolate)} (dollar/s)`);

// let number = prompt(`Enter the number (abc).`);
// let numberA = String(Math.floor(number / 100));
// let numberB = String(Math.floor(number / 10 % 10));
// let numberC = String(number % 10);
// alert(`Back number is ${numberC + numberB + numberA}`);

// let number = +prompt(`Enter the number.`);
// number === 0
//   ? alert(`The number is zero`)
//   : number % 2 === 0
//   ? alert(`The number is even`)
//   : alert(`The number is odd`);

let number = +prompt(`Enter the number.`);
if (number === 0) {
	alert(`The number is zero`);
} else if (number < 0) {
	alert(`The number is negative`);
} else {
	alert(`The number is positive`);
}
