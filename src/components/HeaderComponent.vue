<template>
  <div v-if="isAuthenticated">
    <div id="nav">
      <el-button type="warning" @click="logout">logout</el-button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isAuthenticated () {
      return this.$store.state.auth.isAuthenticated
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({ name: 'home' })
      })
    }
  }
}
</script>

<style scoped>

</style>
