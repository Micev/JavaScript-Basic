function findLargestBySumOfDigits(nums){
    for (var i = 0; i <nums .length; i++) {
        if(nums[i]%1!==0){
            return console.log("undefined");
        }
    }
    var copy=[].concat(nums);
    var sum = 0;
    var maxSum = 0;
    var position = 0;
    for (var i = 0; i < copy.length; i++) {
        if(copy[i]<0)copy[i]*=-1;
        var arr = copy[i].toString().split("").map(function(t){return parseInt(t)});
        for (var j = 0; j < arr.length; j++) {
            sum+=arr[j];
            if(sum>maxSum){
                maxSum = sum;
                position=i;
            }
        }
        sum=0;
    }
    console.log(nums[position]);
}
findLargestBySumOfDigits([5, 10, 15, 111]);
findLargestBySumOfDigits([33, 44, -99, 0, 20]);
findLargestBySumOfDigits("hello");
findLargestBySumOfDigits([5, 3.3]);
