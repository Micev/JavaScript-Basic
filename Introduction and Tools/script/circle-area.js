/**
 * Created by Micev on 14.7.2014 г..
 */
function calcCircleArea(r){
    var area = Math.PI*r*r
    return area;
}
document.getElementById("area1").innerHTML=calcCircleArea(7);
document.getElementById("area2").innerHTML=calcCircleArea(1.5);
document.getElementById("area3").innerHTML=calcCircleArea(20);