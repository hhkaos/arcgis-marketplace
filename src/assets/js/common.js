$.ajaxSetup({
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  }
});

function http_request(url, method, data, success) {
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

function getUrlVars()
{
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

var qs = getUrlVars();