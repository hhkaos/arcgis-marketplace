'use strict';

var render_to_response = function(url, data){

  var template = $.templates("#appCard");

  data.results.forEach(function(elem, i){
    elem.description = elem.description? elem.description: 'Without description';
    
    elem.price = (elem.price > 0)? '$'+ (elem.price / 100): 'Free';

    // var p = '<div class="card block trailer-1">'+
    // '<a href="product/?id='+elem.id+'"><img class="card-image" src="'+elem.image+'"></a>'+
    // '<div class="card-content">'+
    // '<h4 class="font-size-1 trailer-half"><a href="product/?id='+elem.id+'">'+elem.name+'</a></h4>'+
    // '<p class="trailer-0 font-size--1">'+elem.description+' <br> Author: '+elem.owner.username+' | Price: '+ price +'</p>'+
    // '</div>'+
    // '</div>';



    var htmlOutput = template.render(elem);

    $('#product-list').prepend(htmlOutput);

  });
}

var get_products = 'https://arcgis.domake.io/api/products';
http_request(get_products, 'GET');