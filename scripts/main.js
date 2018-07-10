var xmlhttp = new XMLHttpRequest();
var url = "products.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);

        myArr.forEach(function (myArr) {
            itemVisited(myArr);
            productsRecomendation(myArr);
        });
    }
    
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

// EXIBE PRODUTO VISITADO
function itemVisited(myArr) {
    
    var visited = myArr.data.item,
        nameVisited = visited.name,
        oldPrice = visited.price,
        orPrice = visited.productInfo.paymentConditions,
        outVisited = "";
        

    outVisited += '<div class="visited__products">' +
                        '<img src="/images/iPhone-SE-Apple-com-16GB-Tela-4-iOS-9-Sensor-de-Impressao-Digital-Camera-iSight-12MP-Wi-Fi-3G-4G-GPS-MP3-Bluetooth-e-NFC-Cinza-Espacial-7990220.jpg" alt="" />' +
                        '<p id="js-title" class="visited__products-title">' + nameVisited + '</p>' +
                        '<span>Por: <strong>' + oldPrice + '</strong></span><br />' +
                        '<span>ou ' + orPrice + '</span>' +
                        '<div class="box__btnBuy js-btn">adicionar ao carrinho' +
                            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
                            '<path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none" />' +
                            '<path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/>' +
                            '</svg>' +
                    '</div>'

    document.getElementById("visited").innerHTML = outVisited;
}

// EXIBE PRODUTOS RECOMENDADOS
function productsRecomendation(myArr) {
    var recommendation = myArr.data.recommendation;
    recommendation.forEach(function (myArr) {
        var outRecomended = "";
        var i;

        for (i = 0; i < recommendation.length; i++) {
            console.log('recomended');
            
            var titleRecomended = recommendation[i].name,
                priceRecomended = recommendation[i].price,
                orPriceRecomended = recommendation[i].productInfo.paymentConditions;
                
                outRecomended += '<div class="recomended__products">' +
                            '<div class="recomended__products-conteudo">' +
                                '<img src="/images/MacBook-Pro-Apple-MF839BZ-A-com-Intel-Core-i5-Dual-Core-8GB-128GB-SSD-Leitor-de-Cartoes-HDMI-Wireless-Webcam-LED-Retina-13-3-e-OS-X-Yosemite-4453613.jpg" alt="" />' +
                                '<p id="js-title-recomended" class="recomended__products-conteudo--title">' + titleRecomended + '</p>' +
                                '<span>Por: <strong>' + priceRecomended + '</strong></span><br />' +
                                '<span>ou ' + orPriceRecomended + '</span>' +
                                '<div class="box__btnBuy js-btn">adicionar ao carrinho' +
                                    '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">' +
                                    '<path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none" />' +
                                    '<path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/>' +
                                    '</svg>' +
                                '</div>' +
                            '</div>' +
                            '</div>'
        }

        document.getElementById("recomended").innerHTML = outRecomended;
    });
}


// trecho feito com JQUERY >> Adicionando botão de comprar no hover / montando slider de prateleira com slick
$(window).on('load', function () {
    $('#recomended .recomended__products, #visited .visited__products').mouseover(function () {
        var txt = $(this).find('.js-btn');
        txt.show();

        $(this).mouseleave(function () {
            console.log('visible');
            txt.hide();
        })
    });

    $('.recomended').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});