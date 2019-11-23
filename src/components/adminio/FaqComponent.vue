<template>
    <div id="adminio_faq">
      <h3>FAQ</h3>
      <div class="row" v-for="item in faqList" v-bind:key="item.id">
        <div class="col-1">{{item.id}}</div>
        <div class="col-3">{{item.question}}</div>
        <div class="col-6">{{item.answer}}</div>
        <div class="col-2">Del Edit</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'FaqComponent',
  data () {
    return {
      faqList: []
    }
  },
  created () {
    this.$store.dispatch('getFaq').then((response) => {
      console.log(response)
      this.faqList = response
    })
  }
}
</script>

<style scoped>

</style>
