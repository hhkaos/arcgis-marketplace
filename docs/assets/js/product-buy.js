'use strict';

var render_to_response = function(url, data){
  $('#author').text(data.owner.username);
  $('#title').text(data.title);

  if(data.price>0){
    $('.price').text('$'+(data.price/100));
  }else{
    $('#buy').text('Install for free');
  }
  
  $('#preview').attr('src',data.image);
}

var get_details = 'https://arcgis.domake.io/api/products/' + qs.id;
http_request(get_details, 'GET');

$('[name="payment-method"]').change(function(e){
  var method = $(this).val();
  if(method === 'paypal'){
    $('#paypal').slideDown();
    $('#bank-transfer').slideUp();
  }
  if(method === 'bank-transfer'){
    $('#bank-transfer').slideDown();
    $('#paypal').slideUp();
  }
});

$('#paypal button').click(function(){
  var data = {
    'items': [
    {'id': qs.id, 'quantity': 1}
    ]
  };

  $.ajax({
    type: 'POST',
    url: 'https://arcgis.domake.io/api/orders',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(data),
    success: function(data){
      var paypal_endpoint = 'https://arcgis.domake.io/orders/' + data.id + '/paypal-form';

      $.get(paypal_endpoint, function( data ) {
       $('#paypal').html( data );
     });
    },
    dataType: 'json'
  });
});
/*

  POST - pago
  https://arcgis.domake.io/api/orders

  application/json

  {
      "items": [
          {"id": "54176930b90e480284f7884b83ebce71", "quantity": 1}
      ]
  }

  producto/id-producto/

*/