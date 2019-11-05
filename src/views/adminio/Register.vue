<template>
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4">
      <RegisterComponent></RegisterComponent>
    </div>
    <div class="col-4"></div>
  </div>
</template>

<script>
import RegisterComponent from '@/components/adminio/RegisterComponent.vue'

export default {
  name: 'Register',
  components: {
    RegisterComponent
  }
}
</script>
