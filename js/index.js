'use strict';

$.ajaxSetup({
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  }
});

var render_to_response = function(url, data){
  var endpoint = "<hr><h2>Endpoint: " + url + "</h2>";
  $(".result").append(endpoint + "<pre>" + JSON.stringify(data, undefined, 2) + "</pre>");
};

var request = function(url, method, data, callback) {
  $.ajax(url, {
    method: method,
    data: data,
    dataType: 'json',
    success: function(data){
      render_to_response(url, data);

      if(typeof callback === 'function'){
        callback(data);
      }
    },
    error: function(data) {
      render_to_response(url, data);

      if(typeof callback === 'function'){
        callback(data);
      }

    }
  });
};


var is_authenticated = function(callback){
  request('https://arcgis.domake.io/api/me?format=json', 'GET', null, callback);
};
