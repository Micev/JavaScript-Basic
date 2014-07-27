function convertKWtoHP( value) {
    var result = value/0.745699872;
    return result.toFixed(2);
}
console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));