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

    var outVisited = "";
    var outRecomended = "";
    var i;
    
    for (i = 0; i < arr.length; i++) {
        var title = arr[0].data.item.name,
            price = arr[0].data.item.price,
            orPrice = arr[0].data.item.productInfo.paymentConditions;
        
        outVisited += '<div class="visited__products">' +
                            '<img src="/images/iPhone-SE-Apple-com-16GB-Tela-4-iOS-9-Sensor-de-Impressao-Digital-Camera-iSight-12MP-Wi-Fi-3G-4G-GPS-MP3-Bluetooth-e-NFC-Cinza-Espacial-7990220.jpg" alt="" />' +
                            '<p id="js-title" class="visited__products-title">' + title + '</p>' +
                            '<span>Por: <strong>' + price + '</strong></span><br />' +
                            '<span>ou ' + orPrice + '</span>' +
                        '</div>'

        var titleRecomended = arr[0].data.recommendation[0].name,
            priceRecomended = arr[0].data.recommendation[0].price,
            orPriceRecomended = arr[0].data.recommendation[0].productInfo.paymentConditions;

        outRecomended += '<div class="recomended__products">' +
                            '<img src="/images/MacBook-Pro-Apple-MF839BZ-A-com-Intel-Core-i5-Dual-Core-8GB-128GB-SSD-Leitor-de-Cartoes-HDMI-Wireless-Webcam-LED-Retina-13-3-e-OS-X-Yosemite-4453613.jpg" alt="" />' +
                            '<p id="js-title-recomended" class="recomended__products-title">' + titleRecomended + '</p>' +
                            '<span>Por: <strong>' + priceRecomended + '</strong></span><br />' +
                            '<span>ou ' + orPriceRecomended + '</span>' +
                        '</div>'

        document.getElementById("visited").innerHTML = outVisited;
        document.getElementById("recomended").innerHTML = outRecomended;

        console.log('arr', arr);
    }
    
    
}