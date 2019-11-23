<template>
  <div class="container-scroller">
    <navbar-component></navbar-component>
  </div>
</template>

<script>
import NavbarComponent from '../../components/adminio/NavbarComponent'

export default {
  name: 'Welcome',
  components: {
    NavbarComponent
  }
}
</script>

<style scoped>
  @import '../../assets/adminio/css/vendor.bundle.base.css';
  @import '../../assets/adminio/css/flag-icon-css/css/flag-icon.min.css';
  @import '../../assets/adminio/css/simple-line-icons/css/simple-line-icons.css';
  @import './../../assets/adminio/css/style_adminio.css';
</style>
