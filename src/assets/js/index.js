'use strict';

$.ajaxSetup({
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  }
});

var request = function(url, method, data, callback) {
  $.ajax(url, {
    method: method,
    data: data,
    dataType: 'json',
    complete: function(data){

      if(typeof callback === 'function'){
        callback(data);
      }
    }
  });
};


var is_authenticated = function(callback){
  request('https://arcgis.domake.io/api/me?format=json', 'GET', null, callback);
};

var logged = Cookies.get('login');

if(!logged){
  // TODO: avoid check login at every load

  is_authenticated(function(data){

    if(data.responseJSON.username){
      Cookies.set('login', 'true');
      $(document).ready(function(){
        $("#login").hide();
        $("#logout").show();
      });
    }
  });
}else{
  $(document).ready(function(){
    $("#login").hide();
    $("#logout").show();
  });
  
}
