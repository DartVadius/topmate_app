<template>
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4">
      <LoginComponent></LoginComponent>
    </div>
    <div class="col-4"></div>
  </div>
</template>

<script>
import LoginComponent from '@/components/adminio/LoginComponent.vue'

export default {
  name: 'Login',
  components: {
    LoginComponent
  }
}
</script>
