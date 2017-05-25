<template>
  <div class="column-24">
    <div class="block-group block-group-4-up tablet-block-group-2-up phone-block-group-1-up" id="products">
      <div class="card block trailer-1" v-for="product in products">
        <router-link :to="{ name: 'product', params: { id: product.id }}"><img class="card-image" :src="product.image"></router-link>
        <div class="card-content">
          <h4 class="font-size-1 trailer-half"><router-link :to="{ name: 'product', params: { id: product.id }}">{{product.title}}</router-link></h4>
            <p class="trailer-0 font-size--1">{{product.description}}<br> Author: {{product.ownerStr}} | Price: {{product.price | currency}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import app from '../App'
export default {
  name: 'products',
  data () {
    return {
      products: []
    }
  },
  created: function () {
    this.loadProducts()
  },
  methods: {
    loadProducts: function () {
      console.log('load products')
      var self = this
      this.$http.get(app.apiURL + 'products').then(function (response) {
        if (response.ok) {
          this.products = response.data.results
          console.log('products loaded', this.products)

          var i
          for (i = 0; i < this.products.length; i++) {
            var product = this.products[i]

            self.fixProduct(product)
          }
        }
      })
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
