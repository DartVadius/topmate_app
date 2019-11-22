<template>
  <!--==========================
       Gallery Section
     ============================-->
  <section id="gallery" class="wow fadeInUp">

    <div class="container">
      <div class="section-header">
        <h2>Gallery</h2>
        <p>Check our gallery from the recent events</p>
      </div>
    </div>

    <carousel
      :autoplay="true"
      :nav="false"
      :dots="true"
      :loop="true"
      :center="true"
      :responsive="{ 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: {items: 5} }">
      <a href="img/gallery/1.jpg" class="venobox" data-gall="gallery-carousel"><img src="img/gallery/1.jpg" alt=""></a>
      <a href="img/gallery/2.jpg" class="venobox" data-gall="gallery-carousel"><img src="img/gallery/2.jpg" alt=""></a>
      <a href="img/gallery/3.jpg" class="venobox" data-gall="gallery-carousel"><img src="img/gallery/3.jpg" alt=""></a>
      <a href="img/gallery/4.jpg" class="venobox" data-gall="gallery-carousel"><img src="img/gallery/4.jpg" alt=""></a>
      <a href="img/gallery/5.jpg" class="venobox" data-gall="gallery-carousel"><img src="img/gallery/5.jpg" alt=""></a>
      <a href="img/gallery/6.jpg" class="venobox" data-gall="gallery-carousel"><img src="img/gallery/6.jpg" alt=""></a>
      <a href="img/gallery/7.jpg" class="venobox" data-gall="gallery-carousel"><img src="img/gallery/7.jpg" alt=""></a>
      <a href="img/gallery/8.jpg" class="venobox" data-gall="gallery-carousel"><img src="img/gallery/8.jpg" alt=""></a>
    </carousel>

  </section>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: 'GalleryComponent',
  components: { carousel }
}
</script>

<style scoped>

</style>
