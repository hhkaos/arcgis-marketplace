'use strict';

var render_to_response = function(url, data){
      
  $('#author').text(data.owner.username);
  
  if(data.price>0){
    $('#price').text('$' + (data.price / 100));
    $('#buy').attr('href', 'buy/?id=' + data.id)
  }else{
    $('#buy').text('Install for free');
    $('#buy').attr('href', 'setup/?id=' + data.id)
  }
  $('#template-name').text(data.name);
  
  if(data.youtube_url){
    $('#preview-canvas').html('<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="' +
      data.youtube_url + '" width="640" height="360" frameborder="0" ' +
      'style="position:absolute;margin-left:-320px;left:50%" allowfullscreen></iframe></div>');
  }else{
    $('#preview').attr('src', data.image);
  }
  
  $('#description').text(data.description);
  $('#preview-url').attr('href', data.preview + '?' + $.param(data.url_query));

  var lastUpdate = moment(data.created).format('MMMM Do YYYY');

  $('#last-update').text(lastUpdate);
}

//TODO: If user is not logged can not install/buy

var get_details = 'https://arcgis.domake.io/api/products/' + qs.id;
http_request(get_details, 'GET');