<template>
  <main id="main">

    <about-component></about-component>

    <personal-component></personal-component>

    <tabs-component></tabs-component>

    <venue-component></venue-component>

    <hotels-component></hotels-component>

    <gallery-component></gallery-component>

    <f-a-q-component></f-a-q-component>

    <subscribe-component></subscribe-component>

    <buy-component></buy-component>

    <contact-component></contact-component>

  </main>
</template>

<script>
import AboutComponent from './subcomponents/AboutComponent'
import PersonalComponent from './subcomponents/PersonalComponent'
import TabsComponent from './subcomponents/TabsComponent'
import VenueComponent from './subcomponents/VenueComponent'
import HotelsComponent from './subcomponents/HotelsComponent'
import GalleryComponent from './subcomponents/GalleryComponent'
import FAQComponent from './subcomponents/FAQComponent'
import SubscribeComponent from './subcomponents/SubscribeComponent'
import BuyComponent from './subcomponents/BuyComponent'
import ContactComponent from './subcomponents/ContactComponent'

export default {
  name: 'LandingMainComponent',
  components: {
    AboutComponent,
    PersonalComponent,
    TabsComponent,
    VenueComponent,
    HotelsComponent,
    GalleryComponent,
    FAQComponent,
    SubscribeComponent,
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
