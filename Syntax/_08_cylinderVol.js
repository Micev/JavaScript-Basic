function calcCylinderVol(radius,height) {
    var result = Math.PI*Math.pow(radius,2)*height;
    return result.toFixed(3);
}
console.log(calcCylinderVol(2,4));
console.log(calcCylinderVol(5,8));
console.log(calcCylinderVol(12,3));