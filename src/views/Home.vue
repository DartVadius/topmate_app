<template>
  <div class="home">
    <landing-header-component></landing-header-component>
    <landing-intro-component></landing-intro-component>
    <landing-main-component></landing-main-component>
    <landing-footer-component></landing-footer-component>
    <a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingHeaderComponent from '@/components/LandingHeaderComponent.vue'
import LandingIntroComponent from '@/components/LandingIntroComponent.vue'
import LandingMainComponent from '@/components/LandingMainComponent.vue'
import LandingFooterComponent from '@/components/LandingFooterComponent.vue'

export default {
  name: 'home',
  components: {
    LandingHeaderComponent,
    LandingIntroComponent,
    LandingMainComponent,
    LandingFooterComponent
  }
}
</script>
