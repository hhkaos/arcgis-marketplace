const Helpers = {
  install (Vue, options) {
    // We call Vue.mixin() here to inject functionality into all components
    Vue.mixin({
      methods: {
        fixProduct: function (product) {
          // Convert date
          product.modified = new Date(product.modified)

          // Update price
          product.price = product.price / 100

          // Set author string
          product.ownerStr = product.owner.first_name + ' ' + product.owner.last_name

          // Add isFree
          product.isFree = (this.price === 0)
        }
      }
    })
  }
}

export default Helpers
