function convertDigitToWord(value) {
    var number = Math.floor(value/100);
    if(number%10==3)
        return true;
    else
        return false;
}
console.log(convertDigitToWord(1235));
console.log(convertDigitToWord(25368));
console.log(convertDigitToWord(123456));
