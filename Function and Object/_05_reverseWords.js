function reverseWordsInString(str){
    var output = str.slice().split(" ");
    for (var i = 0; i < output.length; i++) {
        output[i]=output[i].split("").reverse().join("");
    }
    console.log(output.join(" "));
}
reverseWordsInString('Hello, how are you.');
reverseWordsInString("Life is pretty good, isn’t it?");