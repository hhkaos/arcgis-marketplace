'use strict';

// TODO: verify that fieldname is always 'username' <- not sure if only for dev accounts
var url = '//' + window.$APP.me.username + '.maps.arcgis.com/home/content.html?start=1&view=table&sortOrder=desc&sortField=modified';

$('#try').attr('href', url);

$('#step-1 form').submit(function(e){

  e.preventDefault();

  $.ajax({
    type: 'POST',    
    dataType: 'json',
    url: 'https://arcgis.domake.io/api/products/' + qs.id + '/activate',
    success: function(data){
      $('#step-1').slideUp(function(){
        $('#step-2').slideDown();
      });
    }
  });
  
  return false;
});