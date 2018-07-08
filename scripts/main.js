var xmlhttp = new XMLHttpRequest();
var url = "dados.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    console.log(arr.data);

    // var name = arr[0].data.recommendation;
    var out = "";
    var i;

    for (i = 0; i < arr.length; i++) {
        //    out += name;
           console.log('args', arr[0].data.recommendation[i].name);
           
    }
    // console.log('out', out);
    
    document.getElementById("js-title").append(out);
}