'use strict';

var render_to_response = function(url, data){

  var template = $.templates("#appCard");

  data.results.forEach(function(elem, i){
    elem.description = elem.description? $($.parseHTML(elem.description)[0]).text(): 'Without description';

    elem.price = (elem.price > 0)? '$'+ (elem.price / 100): 'Free';

    //Bugfix for the demo
    if(elem.owner.username==="test"){
        elem.owner.username = 'geoganster';
    }

    var htmlOutput = template.render(elem);

    $('#product-list').append(htmlOutput);

  });
}

var get_products = 'https://arcgis.domake.io/api/products';
http_request(get_products, 'GET');
