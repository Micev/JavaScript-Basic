function lastDigitAsText(number) {
    var digit = number%10;
    if(digit<0)digit=digit*-1;
    switch (digit){
        case 0:return "zero";
        case 1:return "one";
        case 2:return "two";
        case 3:return "three";
        case 4:return "four";
        case 5:return "five";
        case 6:return "six";
        case 7:return "seven";
        case 8:return "eight";
        case 9:return "nine";
    }
}
console.log(lastDigitAsText(6));
console.log(lastDigitAsText(-55));
console.log(lastDigitAsText(133));
console.log(lastDigitAsText(14567));
