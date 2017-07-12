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

var logged = eval(Cookies.get('login'));
window.$APP = window.$APP || {};


if(!logged){
  // TODO: avoid check login at every load

  is_authenticated(function(data){

    if(data.responseJSON.username){
      Cookies.set('login', 'true');
      logged = true;
      localStorage.me = JSON.stringify(data.responseJSON);
      window.$APP.me = JSON.parse(localStorage.me);
    }
  });
}

if(logged){
  window.$APP.me = JSON.parse(localStorage.me);
  
  $(document).ready(function(){
    $("#login").hide();
    $("#logout").show();
    $('#user-details img').attr('src','https://arcgis.domake.io'+window.$APP.me.avatar)
    $('#user-details .name').text(window.$APP.me.username);
  });
  
  
}
