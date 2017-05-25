<template>
  <div>
    <div class="column-16 pre-4 post-4">
      <div class="column-10">
        <h1>Price</h1>
        <p>
          Amount: 1 x <span class="price">{{product.price | currency}}</span> = <strong class="price">{{product.price | currency}}</strong>
        </p>
        <h1>Payment methods</h1>
        <p>
          <label>
            <input type="radio" name="payment" value="paypal" v-model="paymentSelected"> Pay using PayPal
          </label>
        </p>
        <div v-show="isPaypalSelected">
          <div class="paypal" v-html="paypalForm"></div>
        </div>

        <p class="leader-1">
          <label>
            <input type="radio" name="payment" value="transfer" v-model="paymentSelected"> Pay using bank transfer
          </label>
        </p>
        <div v-show="!isPaypalSelected">
          <p>You have to make a bank transfer to our account number and send us a copy of the transfer by email.</p>
          <p>Account number: XXXX-XXXX-XXXX-XXXX-XXXX</p>
          <p>email: marketplace@gmail.com</p>
        </div>
      </div>
      <div class="column-6">
        <h1>{{product.title}}</h1>
        <div id="preview-canvas" class="trailer-half">
          <img :src="product.image">
        </div>
        <p>
          Author: <span>{{product.ownerStr}}</span>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import app from '../App'
export default {
  name: 'buy',
  data () {
    return {
      product: {},
      paypalForm: '',
      paymentSelected: 'paypal'
    }
  },
  computed: {
    isPaypalSelected: function () {
      return this.paymentSelected === 'paypal'
    }
  },
  created: function () {
    var id = this.$route.params.id
    this.loadProduct(id)
    this.loadPaypalForm(id)
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
    loadPaypalForm: function (id) {
      console.log('load paypal form ' + id)
      this.$http.get(app.serverURL + 'items/' + id + '/paypal-form').then(function (response) {
        if (response.ok) {
          this.paypalForm = response.data

          console.log('paypal form', this.paypalForm)
        }
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
  .paypal{
    width: 230px;
    margin: 0 auto;
    height: auto;
  }
</style>
