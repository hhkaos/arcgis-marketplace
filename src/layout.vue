<template>
  <div>
    <markHeader></markHeader>
    
    <div class="grid-container">
      <router-view></router-view>
    </div>
      
    <markFooter></markFooter>
  </div>
</template>


<script>
import markHeader from './components/layout/mark_header'
import markFooter from './components/layout/mark_footer'
export default {
  name: 'layout',
  components: {
    markHeader,
    markFooter
  }
}
</script>


<style>
</style>
