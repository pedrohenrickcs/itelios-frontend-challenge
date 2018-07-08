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
    console.log(arr["0"].data.item.name);

    var name = arr["0"].data.item.name;
    var out = "";
    var i;

    for (i = 0; i < arr.length; i++) {
           out +=   '<div></div>' +
                    '<p>' + name + '</p>';
           
    }
    document.getElementById("products").innerHTML = out;
}