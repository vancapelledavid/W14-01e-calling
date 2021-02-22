const isAdult = age => age >= 18;

const greetPerson = age => {
    return (isAdult(age) ? 'Hello there' : 'Hey Kiddo');
}

let age = 50;
console.log(greetPerson(age));

//VAT exercise 1

const calcTotalPrice = (basePrice, taxPercentage) => {
    const calcVAT = basePrice => basePrice * taxPercentage / 100;
    return basePrice + calcVAT(basePrice);
}
let basePrice = 1000;
let taxPercentage = 21;
let result = (calcTotalPrice(basePrice, taxPercentage));
console.log(result);

//VAT exersise 2

const barePrices = (totalAmount, taxPercentage) => {
    const calcBasePrice = (totalAmount, taxPercentage) => totalAmount - (totalAmount / (1 + taxPercentage / 100));
    let results = [];
    let basePrice = calcBasePrice(totalAmount, taxPercentage);
    results.push(basePrice);
    results.push(totalAmount - basePrice);
    console.log(results);
}

let totalAmount = 1210;
taxPercentage = 21;
barePrices(totalAmount, taxPercentage);
