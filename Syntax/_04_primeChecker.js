function isPrime(value){
    var isPrime =true;
    for(var i=2;i<=Math.sqrt(value);i++){
        if(value%i==0){
            isPrime=false;
        }
    }
    return isPrime;
}
console.log(isPrime(587));

