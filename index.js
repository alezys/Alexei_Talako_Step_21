//-----------------------------------------------Task#1

// class Marker {
//     constructor(color, colorNum) {
//         this.color = color;
//         this.colorNum = colorNum;
//     }
//     paintMarker(str) {
//         let arrNum = parseInt(this.colorNum);
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] !== ` ` && arrNum !== 0) {
//                 document.write(`<span style = "color:${this.color}">${str[i]}</span>`);
//                 arrNum = arrNum - 0.5;
//                 console.log(arrNum);

//             } else if (str[i] === ` ` && arrNum !== 0) {
//                 document.write(`${str[i]}`);
//             } else if (arrNum === 0) {
//                 console.log(`Marker ended!!!!!!`);
//             }
//         }
//         return this.colorNum = String(arrNum) + `%`;
//     }
// }

// let redMarker = new Marker(`red`, `5%`);

// class FillingMarker extends Marker {
//     fillMarker(numFill) {
//         if(parseInt(this.colorNum) !== 100) {
//             this.colorNum = +(parseInt(this.colorNum) + parseInt(numFill));
//             this.colorNum = this.colorNum + `%`;
//             console.log(`Added up to - ${this.colorNum}`);
//             if (parseInt(this.colorNum) > 100) {
//                 this.colorNum = `100%`;     
//                 console.log(`Marker filled!!!!!!`);           
//             }
//         }
//     }
// }

// let redFillMarker = new FillingMarker(`red`, `5%`);

//-----------------------------------------------Task#2

// class ExtendedDate extends Date {
//     showDate() {
//         let date = myDate.getDate();
//         let month = myDate.getMonth();
//         console.log(date);
//         console.log(month);
//         let dateArr = [`Первое`, `Второе`, `Третье`, `Четвертое`, `Пятое`,`Шестое`,`Седьмое`,`Восьмое`,`Девятое`,`Десятое`,
//         `Одиннадцатое`,`Двенадцатое`,`Тринадцатое`,`Четырнадцатое`,`Пятнадцатое`,`Шестнадцатое`,`Семнадцатое`,
//         `Восемнадцатое`,`Девятнадцатое`,`Двадцатое`,`Двадцать первое`,`Двадцать второе`,`Двадцать третье`,
//         `Двадцать четвертое`,`Двадцать пятое`,`Двадцать шестое`,`Двадцать седьмое`,`Двадцать восьмое`,
//         `Двадцать девятое`,`Тридцатое`,`Тридцать первое`,];
//         let monthArr = [`Января`, `Февраля`, `Марта`, `Апреля`, `Мая`, `Июня`, `Июля`, `Августа`, `Сентября`, 
//         `Октября`, `Ноября`, `Декабря`,];
//         for (let i = 0; i < dateArr.length; i++) {
//             if (i === date) {
//                 console.log(`${dateArr[i - 1]} `)
//             }
//         }
//         for (let i = 0; i < monthArr.length; i++) {
//             if (i === month) {
//                 console.log(`${monthArr[i]} `)
//             }
//         }
//     }
//     checkDate() {
//         let currentDate = new Date ();  
//         if (myDate.getFullYear() > currentDate.getFullYear() || myDate.getMonth() > currentDate.getMonth() || myDate.getDate() > currentDate.getDate()) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     checkLeapYear() {
//         if (myDate.getFullYear() % 400 === 0 || myDate.getFullYear() % 4 === 0) {
//             if ( myDate.getFullYear() % 100 !== 0 ) {
//                 return true;                
//             } else {
//                 return false;
//             }
//         } else {
//             return false;
//         }
//     }
//     setNextDate() {
//         myDate.setDate(myDate.getDate() + 1);
//     }
// }

// let myDate = new ExtendedDate (2021, 8, 3);

//-----------------------------------------------Task#3

class Employee {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}

let johnny = new Employee (`Johnny Boy`, 25, `Regularly`);
let bob = new Employee (`Bob Nasty`, 66, `No sex`);
let pamela = new Employee (`Pamela Bustersson`, 19, `Everywhere`);
let monica = new Employee (`St Monica`, 35, `Doesn't give`);
arrBankWorkers = [johnny, bob, pamela, monica,];

class EmpTable {
    constructor(arr) {
        this.arr = arr;
    }
    getHtml() {
        for (let i = 0; i < this.arr.length; i++) {
            document.write(`<p>${this.arr[i].name}// Age: ${this.arr[i].age} Sex at the work: ${this.arr[i].sex}</p>`);            
        }
    }
}

let bankWorkers = new EmpTable(arrBankWorkers);

//-----------------------------------------------Task#4

class StyledEmpTable extends EmpTable {
    getStales(fontSize, fontFamily, color) {
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.color = color;
    }
    getHtml() {
        document.write(`<style> p {font-size: ${this.fontSize}; font-family: ${this.fontFamily}; color: ${this.color};}</style>`);
        super.getHtml();
    }
}

let bankWorkersStyle = new StyledEmpTable(arrBankWorkers);