$.ajaxSetup({
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  }
});

var render_to_response = function(url, data){
  var endpoint = "<hr><h2>Endpoint: " + url + "</h2>";
  $(".result").append(endpoint + "<p>" + JSON.stringify(data, undefined, 2) + "</p>");
}

var request = function(url, method, data, success) {
  $.ajax(url, {
    method: method,
    data: data,
    dataType: 'json',
    success: function(data){
      render_to_response(url, data)
    },
    error: function(data) {
      render_to_response(url, data);
    }
  });
}
