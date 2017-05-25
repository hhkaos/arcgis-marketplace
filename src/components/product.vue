<template>
  <div>
    <div class="column-24">
      <div class="column-18">
        <p>
          <a href="../calcite-web.html">Home</a> / <a href="#">Developers</a> / <a href="#">{{product.ownerStr}}</a> / <span>{{product.title}}</span>
        </p>
        <h1>{{product.title}}</h1>
        <div id="preview-canvas">
          <img :src="product.image">
        </div>
        <h2 class="leader-0 trailer-0 tablet-show">
          Description
        </h2>
        <h2 class="leader-1 trailer-0 tablet-hide">
          Description
        </h2>
        <p>{{product.description}}</p>
      </div>

      <div class="column-6">
        <span class="leader-2 tablet-hide">&nbsp;</span>
        <p>
          <button class="btn btn-fill btn-clear leader-half icon-ui-maps">Preview</button>
          <button class="btn btn-fill btn-green leader-half icon-ui-favorites">Like</button>
          <router-link :to="{ name: 'buy', params: { id: product.id }}">
            <button v-if="canInstall" class="btn btn-fill leader-half icon-ui-plus">
              <span v-if="product.isFree">Install for free</span>
              <span v-if="!product.isFree">Buy now (<span>{{product.price | currency}}</span>)</span>
            </button>
            <span v-if="!canInstall" class="tooltip modifier-class" aria-label="You must contact with the admin to install apps">
              <button class="btn btn-fill btn-disabled leader-half icon-ui-error2">
                  <span v-if="product.isFree">Install for free</span>
                  <span v-if="!product.isFree">Buy now (<span>{{product.price | currency}}</span>)</span>
              </button>
            </span>
          </router-link>
        </p>
        <p>
          <strong>Last update</strong>: <span>{{product.modified | date('%Y-%m-%d')}}</span><br>
        </p>
        <p>
          <strong>Active installs</strong>: <span id="active-installs">12.302</span>
        </p>
      </div>
    </div>
    <div class="column-24">
      <div id="disqus_thread"></div>
      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>
  </div>
</template>


<script>
import app from '../App'
export default {
  name: 'product',
  data () {
    return {
      product: {},
      canInstall: false
    }
  },
  created: function () {
    var id = this.$route.params.id
    this.loadProduct(id)
    this.checkAuth();

    // Load disqus
    (function () { // DON'T EDIT BELOW THIS LINE
      var d = document
      var s = d.createElement('script')
      s.src = 'https://arcgis-confapps.disqus.com/embed.js'
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s)
    })()
  },
  methods: {
    loadProduct: function (id) {
      console.log('load product ' + id)
      this.$http.get(app.apiURL + 'products/' + id).then(function (response) {
        if (response.ok) {
          this.product = response.data

          this.fixProduct(this.product)

          console.log('product loaded', this.product)
        }
      })
    },
    checkAuth: function () {
      var self = this
      this.$http.get(app.apiURL + 'me?format=json').then(function (response) {
        if (response.ok) {
          var user = response.data

          self.canInstall = (user.level === '2')

          console.log('checkAuth', self.canInstall)
        }
      }, function (err) {
        console.log(err)
      })
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    font-size: 1.5rem;
    margin: 0;
  }
  h2{
    font-size: 1.2rem;
  }
  #preview-canvas{
    max-height: 400px;
    width: 100%;
    overflow: hidden;
  }
</style>
