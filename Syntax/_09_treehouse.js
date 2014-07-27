function treeHouseCompare(a,b) {
    var houseArea= a*a + 0.5*a*b;
    var treeArea =  b*(b / 3)+Math.PI*Math.pow(b*2/3, 2);
    if (houseArea>=treeArea)
    return console.log("house/"+houseArea.toFixed(2));
    else
        return console.log("tree/"+treeArea.toFixed(2));
}
treeHouseCompare(3,2);
treeHouseCompare(3,3);
treeHouseCompare(4,5);