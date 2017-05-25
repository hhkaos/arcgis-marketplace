<template>
  <div class="column-24">
    <!-- desktop sized navigation -->
    <div class="tablet-hide">
      <!-- logo / home -->
      <a href="#" class="top-nav-title">
        ArcGIS Configurable Web Apps <br>
        <small style="font-style: italic;">Extend your organization with new templates, storymaps and much more.</small>
      </a>

      <!-- primary navigation sections -->
      <nav class="top-nav-list" role="navigation" aria-labelledby="topnav">
        <!--<a class="top-nav-link" href="#">About us</a>
        <a class="top-nav-link" href="#"> | </a>
        <a class="top-nav-link" href="#">Developers</a>-->
      </nav>
      <!-- user specific dropdowns -->
      <nav class="class-top-nav-list right" role="navigation" aria-labelledby="usernav">
        <!--
        <form method="GET" action="/search/" class="inline-block padding-leader-half">
          <input type="search" placeholder="Search" name="q" style="margin-top: -1px;">
          <button type="submit" class="hide">Search</button>
        </form>
        -->
        <a v-show="!isAuth" class="top-nav-link icon-ui-user margin-left-1" href="https://arcgis.domake.io/login/arcgis/">Sign In</a>

        <a v-show="isAuth" href="#" class="top-nav-link dropdown-btn top-nav-username text-ellipsis">
          <img id="profileImgSmall" width="16" height="16" alt="" src="//cdn.arcgis.com/cdn/20557/js/arcgisonline/css/images/no-user-thumb.jpg">
          <span id="username" :title="fullName">{{name}}</span>
        </a>

      </nav>
    </div>

    <!-- tablet and mobile sized navigation -->
    <div class="tablet-show top-nav-flex">
      <!-- open primary navigation drawer -->
      <nav class="top-nav-flex-list" role="navigation" aria-labelledby="topnav">
        <a href="/" class="icon-ui-menu top-nav-link js-drawer-toggle" data-drawer="top-nav"><span class="phone-hide">Menu</span></a>
      </nav>
      <!-- logo / home -->
      <header class="top-nav-flex-title">
        <a href="/" class="top-nav-link">ArcGIS <span class="phone-hide">for Developers</span></a>
      </header>
      <!-- user specific actions -->
      <nav class="top-nav-flex-list text-right" role="navigation" aria-labelledby="usernav">
        <a class="top-nav-link icon-ui-search js-drawer-toggle" href="#" aria-label="Search"><span class="phone-hide">Search</span></a>
        <a class="top-nav-link icon-ui-user margin-left-1 js-drawer-toggle" href="#" aria-label="Sign In"><span class="phone-hide">Sign In</span></a>
      </nav>
    </div>
  </div>
</template>


<script>
export default {
  name: 'header',
  data () {
    return {
      user: undefined
    }
  },
  computed: {
    isAuth: function () {
      return (this.user !== undefined)
    },
    name: function () {
      var name = ''
      if (this.user) name = this.user.firstName
      return name
    },
    fullName: function () {
      var fullName = ''
      if (this.user) fullName = this.user.fullName
      return fullName
    }
  },
  methods: {
    refreshAuth: function () {
      console.log('refreshAuth')

      this.user = undefined

      var self = this
      this.$http.get('https://arcgis.domake.io/api/me?format=json').then(function (response) {
        if (response.ok) {
          self.user = response.data

          console.log('user loaded', self.user)
        }
      }, function (err) {
        console.log(err)
      })
    }
  },
  created: function () {
    this.refreshAuth()
  },
  watch: {
    '$route': function (val) {
      this.refreshAuth()
    }
  }
}
</script>
