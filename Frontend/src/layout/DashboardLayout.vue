<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/current">
        <i class="nc-icon nc-notes"></i>
        <p>Current</p>
      </sidebar-link>
      <sidebar-link to="/history">
        <i class="nc-icon nc-paper-2"></i>
        <p>History</p>
      </sidebar-link>
      <sidebar-link to="/forecasting">
        <i class="nc-icon nc-atom"></i>
        <p>Forecasting</p>
      </sidebar-link>
      <sidebar-link to="/about-us">
        <i class="nc-icon nc-vector"></i>
        <p>About Us</p>
      </sidebar-link>

    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
