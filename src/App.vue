<template>
  <div id="app">
    <HeaderComponent v-if="isAuthenticated"></HeaderComponent>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  components: {
    HeaderComponent
  },
  computed: {
    isAuthenticated () {
      return this.$store.state.auth.isAuthenticated
    }
  }
}
</script>

<style lang="scss">
</style>
