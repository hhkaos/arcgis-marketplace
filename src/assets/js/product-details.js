'use strict';

var render_to_response = function(url, data){

  $('#author').text(data.owner.username);

  var lastUpdate = moment(data.created).format('MMMM Do YYYY');

  $('#last-update').text(lastUpdate);

  if(data.price>0){
    $('#price').text('Buy ($' + (data.price / 100) + ')');
    $('#buy').attr('href', 'buy/?id=' + data.id)
  }else{
    $('#buy').text('Install for free');
    $('#buy').attr('href', 'setup/?id=' + data.id)
  }
  $('#template-name').text(data.name);

  if(data.youtube_url){

    var template = $.templates("#videoTmpl");
    var htmlOutput = template.render(data);
    $('#preview-canvas').html(htmlOutput);

  }else{
    $('#preview').attr('src', data.image);
  }

  $('#description').html(data.description);

  var template = $.templates("#previewTmpl");
  var url = { fullUrl: data.preview };

  if(data.url_query){
    url.fullUrl += '?' + $.param(data.url_query);
  }

  $('#previewBtn').attr('href', url.fullUrl);
  /*var htmlOutput = template.render(url);
  $('#preview-app').html(htmlOutput);

  $('#previewBtn').click(function(){
    $('#preview-canvas').slideToggle();
    $('#preview-app').slideToggle();
  });*/

}

//TODO: If user is not logged can not install/buy

var get_details = 'https://arcgis.domake.io/api/products/' + qs.id;
http_request(get_details, 'GET');
