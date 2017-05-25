<template>
  <footer class="footer leader-2 link-dark-gray" role="contentinfo">
    <div class="grid-container">
      <nav class="column-6">
        <h6>Organizations</h6>
        <ul class="list-plain">
          <li><a href="#">Support</a></li>
          <li><a href="#">Share and idea</a></li>
          <li><a href="#">Co-create an app</a></li>
        </ul>
      </nav>

      <nav class="column-6">
        <h6>Developers</h6>
        <ul class="list-plain">
          <li><a href="#">Publish your app</a></li>
          <li><a href="https://esri-es.github.io/awesome-arcgis/arcgis/products/configurable-apps/">Guides</a></li>
          <li><a href="https://geonet.esri.com/groups/arcgis-online-templates">Community</a></li>
        </ul>
      </nav>

      <nav class="column-6">
        <h6>About Vexiza</h6>
        <ul class="list-plain">
          <li><router-link :to="{ name: 'about' }">About Us</router-link></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Insiders Blog</a></li>
        </ul>
      </nav>

      <nav class="column-6">
        <a class="esri-logo" href="http://vexiza.com/" aria-label="Vexiza Home"
        style="
              background-image: url(http://vexiza.com/wp-content/uploads/2016/01/logoweb-negro-normal.png)!important;
              width: 137px;
              "
        ></a>
        <section class="footer-social-nav leader-1">
          <a class="icon-social-twitter" aria-label="Vexiza on Twitter" href="https://twitter.com/vexiza_leon"></a>
          <a class="icon-social-linkedin" aria-label="Vexiza on Linkedin" href="https://www.linkedin.com/company/vexiza"></a>
          <a class="icon-social-youtube" aria-label="Vexiza on Instagram" href="https://www.youtube.com/channel/UCaflKFwmIoRchEcawMAwIXQ"></a>
          <a class="icon-social-google-plus" aria-label="Vexiza on Google+" href="https://plus.google.com/106531276152718092500/about"></a>
          <a class="icon-social-contact" aria-label="Contact Vexiza" href="http://vexiza.com/?page_id=6337"></a>
        </section>
      </nav>

      <div class="column-24 leader-1">
        <p><small>Copyright © 2017 Vexiza. All rights reserved. </small></p>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'footer',
  methods: {

  }
}
</script>
