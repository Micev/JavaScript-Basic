function findNthDigit(arr) {
    var n = arr[0];
    if(num<0) num*=-1;
    var num = arr[1].toString().replace(".","");
    if(num<0) num*=-1;
    if(num.length<n){
       return console.log("The number doesn't have " + n + " digits");
    }
    num=Number(num);
    for (var i = 0; i < arr[0]-1; i++) {
      num=Math.floor( num/10);
    }
    console.log(num%10);
}
findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);