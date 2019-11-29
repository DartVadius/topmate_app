<template>
  <!--==========================
        F.A.Q Section
      ============================-->
  <section v-if="faqList.length > 0" id="faq" class="wow fadeInUp">

    <div class="container">

      <div class="section-header">
        <h2>F.A.Q </h2>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-9">
          <ul id="faq-list">
            <li v-for="value in faqList" :key="value.id">
              <a data-toggle="collapse" class="collapsed" :href="`#faq${value.id}`">{{value.question_en}} <i class="fa fa-minus-circle"></i></a>
              <div :id="`faq${value.id}`" class="collapse" data-parent="#faq-list">
                <p>
                  {{value.answer_en}}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: 'FAQComponent',
  data () {
    return {
      faqList: []
    }
  },
  created () {
    this.$store.dispatch('getFaq').then((response) => {
      this.faqList = response
    })
  }
}
</script>

<style scoped>

</style>
