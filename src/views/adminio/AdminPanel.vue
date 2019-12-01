<template>
  <div id="adminio" class="container-scroller">
    <navbar-component></navbar-component>
    <div class="container-fluid page-body-wrapper">
      <sidebar-component @openComponent="setComponent"></sidebar-component>
      <div class="main-panel">
        <div class="content-wrapper">
          <dashboard-component v-if="component === 'dashboard'"></dashboard-component>
          <faq-component v-if="component === 'faq'"></faq-component>
          <calculator-component v-if="component === 'calculator'"></calculator-component>
        </div>
        <!-- content-wrapper ends -->
        <footer-component></footer-component>
      </div>
      <!-- main-panel ends -->
    </div>
  </div>
</template>

<script>
import NavbarComponent from '../../components/adminio/NavbarComponent'
import SidebarComponent from '../../components/adminio/SidebarComponent'
import FooterComponent from '../../components/adminio/FooterComponent'
import FaqComponent from '../../components/adminio/FaqComponent'
import DashboardComponent from '../../components/adminio/DashboardComponent'
import CalculatorComponent from '../../components/adminio/CalculatorComponent'

export default {
  name: 'AdminPanel',
  data () {
    return {
      component: 'dashboard'
    }
  },
  components: {
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    FaqComponent,
    DashboardComponent,
    CalculatorComponent
  },
  methods: {
    setComponent (component) {
      this.component = component
    }
  }
}
</script>

<style scoped>
  @import '../../assets/adminio/css/vendor.bundle.base.css';
  @import '../../assets/adminio/css/flag-icon-css/css/flag-icon.min.css';
  @import '../../assets/adminio/css/simple-line-icons/css/simple-line-icons.css';
  @import './../../assets/adminio/css/style_adminio.css';
</style>
