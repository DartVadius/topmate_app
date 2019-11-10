<template>
  <el-menu
    class="mb-0"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/about">About</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/adminio/welcome">Welcome</router-link></el-menu-item>
    <el-menu-item index="4"><router-link to="/adminio/panel">Panel</router-link></el-menu-item>
    <el-menu-item class="float-right" index="5"><el-button size="small" type="warning" @click="logout">logout</el-button></el-menu-item>
  </el-menu>
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
