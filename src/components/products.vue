<template>
  <div class="block-group block-group-4-up tablet-block-group-2-up phone-block-group-1-up" id="products"></div>
</template>


<script>
import $ from 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'
export default {
  name: 'products',
  mounted: function () {
    'use strict'
    $(document).ready(function () {
      $.ajaxSetup({
        crossDomain: true,
        xhrFields: {
          withCredentials: true
        }
      })

      var request = function (url, method, data, success) {
        $.ajax(url, {
          method: method,
          data: data,
          dataType: 'json',
          success: function (data) {
            renderToResponse(url, data)
          },
          error: function (data) {
            renderToResponse(url, data)
          }
        })
      }

      var renderToResponse = function (url, data) {
        // debugger
        data.results.forEach(function (elem, i) {
          // debugger
          elem.description = elem.description ? elem.description : 'Without description'
          var price = (elem.price / 100 > 0) ? '$' + (elem.price / 100) : 'Free'
          var p = '' +
          '<div class="card block trailer-1">' +
            '<a href="product/?id=' + elem.id + '"><img class="card-image" src="' + elem.image + '"></a>' +
            '<div class="card-content">' +
              '<h4 class="font-size-1 trailer-half"><a href="product/?id=' + elem.id + '">' + elem.title + '</a></h4>' +
              '<p class="trailer-0 font-size--1">' + elem.description + ' <br> Author: ' + elem.owner.username + ' | Price: ' + price + '</p>' +
            '</div>' +
          '</div>'

          $('#products').append(p)
        })
      }

      var getProducts = 'https://arcgis.domake.io/api/products'
      request(getProducts, 'GET')
    })
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
