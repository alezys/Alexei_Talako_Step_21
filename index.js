// let apples = {      //------------------------------------------------------ Task #1
//     name: `Apples`,
//     number: 5,
//     purchase: `No`,
// }
// let bananas = {
//     name: `Bananas`,
//     number: 3,
//     purchase: `Yes`,
// }
// let tomatoes = {
//     name: `Tomatoes`,
//     number: 6,
//     purchase: `No`,
// }
// let oranges = {
//     name: `Oranges`,
//     number: 2,
//     purchase: `Yes`,
// }
// let limes = {
//     name: `Limes`,
//     number: 1,
//     purchase: `No`,
// }
// let shoppingList = [apples, tomatoes, oranges, limes, bananas];      

// function showProducts(array) {
//     let i = array.length;
//     console.log(array.length);
//     for (i; i > 0; i--) {
//         if (array[i - 1].purchase === `No`) {
//             document.write(`${array[i - 1].name} -- Not purchased -- = ${array[i - 1].number}<br>`);
//         }
//     }
//     for (i; i < array.length; i++) {
//         if (array[i].purchase === `Yes`) {
//             document.write(`${array[i].name} -- Purchased = ${array[i].number}<br>`);
//         }
//     }
// }
// showProducts(shoppingList);

// cucumbers = {
//     name: `Cucumbers`,
//     number: 2,
//     purchase: `No`,
// }
// function addProducts(array, product, number) {
//     let i = 0;
//     let count = 0;
//     for (i; i < array.length; i++){
//         if (array[i].name === product.name) {
//             count += 1;
//             array[i].number = +(array[i].number + number);
//         }
//     }
//     if (count === 0) {
//         array.push(product);
//     }
// }
// addProducts(shoppingList, apples, 3);
// addProducts(shoppingList, cucumbers);
// showProducts(shoppingList);

// function purchasedProducts(array, name) {
//     let i = 0;
//     for (i; i < array.length; i++) {
//         console.log(array[i].name);
//         if (array[i].name === name) {
//             array[i].purchase = `Yes`;
//         }
//     }
// }
// purchasedProducts(shoppingList, `Cucumbers`);
// showProducts(shoppingList);


// let check = [             //------------------------------------------------- Task #2
//     [`Vodka`, 3, 4],
//     [`Pepsi`, 3, 1],
//     [`Cigarettes`, 6, 1.5],
//     [`Bubble gum`, 3, 0.5],
// ];

// function showCheck(array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(`Name product: "${array[i][0]}", number: ${array[i][1]}, cost of unit: ${array[i][2]}$<br>`);       
//     }
// }
// showCheck(check);

// function allCost(array) {
//     let costAll = ``;
//     for (let i = 0; i < array.length; i++) {
//         let cost = array[i][1] * array[i][2];
//         costAll = +(costAll + cost);        
//     }
//     document.write(`Total cost: ${costAll}$<br>`);
// }
// allCost(check);

// function maxCost(array) {
//   let maximumCost = ``;
//   let cashName = ``;
//   let cost = ``;
//   for (let i = 0; i < array.length; i++) {
//     cost = array[i][1] * array[i][2];
//     console.log(cost);
//     maximumCost = (maximumCost > cost) ? maximumCost : cost;
//     if (maximumCost === cost) {
//       cashName = array[i][0];
//     }
//   }
//   document.write(`Max purchase: ${maximumCost}$ for -- "${cashName}"<br>`);
// }
// maxCost(check);

// function averageCostShow(array) {
//   let costAll = ``;
//   for (let i = 0; i < array.length; i++) {
//     let cost = array[i][1] * array[i][2];
//     costAll = +(costAll + cost);
//   }
//   let averageCost = costAll / array.length;
//   document.write(`Average cost of purchases: ${averageCost}$<br>`);
// }
// averageCostShow(check);

//-------------------------------------------------------------------Task #3
// let styles = [
//   {
//     name: 'color',
//     value: 'green',
//   },
//   {
//     name: 'margin',
//     value: '40px',
//   },
//   {
//     name: 'font-size',
//     value: '30px',
//   },
//   {
//     name: 'font-weight',
//     value: '800',
//   },
// ]

// function outputText(text, styles) {
//   const allStyle = [];
//   for (let style of styles) {
//     allStyle.push(`${style.name}: ${style.value};`);
//   }
//   document.write(`<p style='${allStyle.join(' ')}'>${text}</p>`);
// }

// outputText('Лёха - топчик', styles);

let N156 = {     // -------------------------------------------------------------------Task #4
    name: `№156`,
    numberOfPlaces: 19,
    nameOfFaculty: `Mathematical`,
}
let N189 = {
    name: `№189`,
    numberOfPlaces: 18,
    nameOfFaculty: `Physical`,
}
let N37 = {
    name: `№37`,
    numberOfPlaces: 12,
    nameOfFaculty: `Physical`,
}
let N69 = {
    name: `№69`,
    numberOfPlaces: 20,
    nameOfFaculty: `Sex education`,
}
let N200 = {
    name: `№200`,
    numberOfPlaces: 10,
    nameOfFaculty: `Economical`,
}
let audiencesList = [N156, N189, N37, N69, N200];

function audiencesShowList(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(`Audience: ${array[i].name} // Number of places = ${array[i].numberOfPlaces} // Name of faculty = ${array[i].nameOfFaculty}<br>`);
    }
    document.write(`<br>`);
}
audiencesShowList(audiencesList);

function audiencesFacShowList(array, faculty) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].nameOfFaculty === faculty) {
            document.write(`Audience: ${array[i].name} // Number of places = ${array[i].numberOfPlaces} // Name of faculty = ${array[i].nameOfFaculty}<br>`);    
        }
    }
    document.write(`<br>`);
}
audiencesFacShowList(audiencesList, `Physical`);

let companyOfGeeks = {
    name: `Geeks`,
    numberOfMembers: 20,
    nameOfFaculty: `Sex education`,   
}

function audiencesMembersShowList(array, members) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].nameOfFaculty === members.nameOfFaculty && array[i].numberOfPlaces >= members.numberOfMembers) {
            document.write(`For ${members.name} ====> Audience: ${array[i].name} // Number of places = ${array[i].numberOfPlaces} // Name of faculty = ${array[i].nameOfFaculty}<br>`);    
        }
    }
    document.write(`<br>`);
}
audiencesMembersShowList(audiencesList, companyOfGeeks);

function showNumberOfPlaces(array) {
    let minNum = array[0].numberOfPlaces;
    // console.log(minNum);
    for (let count = 0; count < array.length; count++) {
        for (let i = 1; i < (array.length - 1); i++) {
            minNum = (minNum <= array[i].numberOfPlaces) ? minNum : array[i].numberOfPlaces;
            console.log(minNum);
        }
    }   
}
showNumberOfPlaces(audiencesList);

function sortByNumberOfPlaces(array) {
  const newAudiencesList = copyArray(array);
  newAudiencesList.sort((a, b) => a.numberOfPlaces - b.numberOfPlaces);
  audiencesShowList(newAudiencesList);
}

function copyArray(arr) {
  const newArr = [];
  for (let item of arr) {
    newArr.push(item)
  }
  return newArr;
}
sortByNumberOfPlaces(audiencesList);

function sortByName(audiencesList) {
  const newAudiencesList = copyArray(audiencesList);
  newAudiencesList.sort((a, b) => a.name.slice(1, a.name.length) - b.name.slice(1, b.name.length));
  audiencesShowList(newAudiencesList)
}
sortByName(audiencesList);

