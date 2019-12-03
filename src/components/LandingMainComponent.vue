<template>
  <main id="main">

    <about-component></about-component>

    <gallery-component></gallery-component>

    <buy-component></buy-component>

    <f-a-q-component></f-a-q-component>

    <calculator-component></calculator-component>

<!--    <personal-component></personal-component>-->

<!--    <tabs-component></tabs-component>-->

    <venue-component></venue-component>

<!--    <hotels-component></hotels-component>-->

    <contact-component></contact-component>

  </main>
</template>

<script>
import AboutComponent from './subcomponents/AboutComponent'
// import PersonalComponent from './subcomponents/PersonalComponent'
// import TabsComponent from './subcomponents/TabsComponent'
import VenueComponent from './subcomponents/VenueComponent'
// import HotelsComponent from './subcomponents/HotelsComponent'
import GalleryComponent from './subcomponents/GalleryComponent'
import FAQComponent from './subcomponents/FAQComponent'
import CalculatorComponent from './subcomponents/CalculatorComponent'
import BuyComponent from './subcomponents/BuyComponent'
import ContactComponent from './subcomponents/ContactComponent'

export default {
  name: 'LandingMainComponent',
  components: {
    AboutComponent,
    // PersonalComponent,
    // TabsComponent,
    VenueComponent,
    // HotelsComponent,
    GalleryComponent,
    FAQComponent,
    CalculatorComponent,
    BuyComponent,
    ContactComponent
  },
  data () {
    return {
      publicPath: process.env.VUE_APP_baseUrl
    }
  }
}
</script>

<style scoped>
</style>
