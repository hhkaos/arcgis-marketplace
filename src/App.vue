<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
import layout from './layout'
export default {
  name: 'app',
  components: {
    layout
  },
  apiURL: 'https://arcgis.domake.io/api/'
}
</script>


<style>
</style>
