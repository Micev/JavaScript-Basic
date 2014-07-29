function countDivs(html)  {
    var div = "<div";
    var counter = 0;
    for (var i = 0; i < html.length; i++) {
        var res = html.substring(i,i+div.length)
        if(div===res){
            counter++;
        }
    }
    console.log(counter);
}
countDivs('<!DOCTYPE html>'+
'<html>'+
    '<head lang=\"en\">'+
        '<meta charset=\"UTF-8\">'+
            '<title>index</title>'+
            '<script src=\"/yourScript.js\" defer></script>'+
        '</head>'+
        '<body>'+
           ' <div id="outerDiv">'+
                '<div'+
                'class="first">'+
                   '<div><div>hello</div></div>'+
                '</div>'+
               ' <div>hi<div></div></div>'+
                '<div>I am a div</div>'+
            '</div>'+
        '</body>'+
    "</html>");
