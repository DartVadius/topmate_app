<template>
  <section id="contact" class="section-bg wow fadeInUp">

    <div class="container">

      <div class="section-header">
        <h2>Contact Us</h2>
        <p>Nihil officia ut sint molestiae tenetur.</p>
      </div>

      <div class="row contact-info">

        <div class="col-md-4">
          <div class="contact-address">
            <i class="ion-ios-location-outline"></i>
            <h3>Address</h3>
            <address>A108 Adam Street, NY 535022, USA</address>
          </div>
        </div>

        <div class="col-md-4">
          <div class="contact-phone">
            <i class="ion-ios-telephone-outline"></i>
            <h3>Phone Number</h3>
            <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="contact-email">
            <i class="ion-ios-email-outline"></i>
            <h3>Email</h3>
            <p><a href="mailto:info@example.com">info@example.com</a></p>
          </div>
        </div>

      </div>

      <div class="form">
        <div role="form" class="contactForm">
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="text"
                     v-model="name"
                     name="name"
                     class="form-control"
                     v-validate="'required'"
                     id="name" placeholder="Your Name"/>
              <span class="validation">{{ errorBags.first('name') }}</span>
            </div>
            <div class="form-group col-md-6">
              <input type="email"
                     v-model="email"
                     class="form-control"
                     name="email"
                     id="email"
                     v-validate="'required|email'"
                     placeholder="Your Email" />
              <span class="validation">{{ errorBags.first('email') }}</span>
            </div>
          </div>
          <div class="form-group">
            <input type="text"
                   v-model="subject"
                   class="form-control"
                   name="subject"
                   id="subject"
                   placeholder="Subject"
                   v-validate="'required'"
                   data-msg="Please enter at least 8 chars of subject" />
            <span class="validation">{{ errorBags.first('subject') }}</span>
          </div>
          <div class="form-group">
            <textarea class="form-control"
                      v-model="message"
                      name="message"
                      rows="5"
                      v-validate="'required'"
                      data-msg="Please write something for us"
                      placeholder="Message"></textarea>
            <span class="validation">{{ errorBags.first('message') }}</span>
          </div>
          <div class="text-center"><button type="submit" @click="sendMessage">Send Message</button></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactComponent',
  data () {
    return {
      name: null,
      email: null,
      subject: null,
      message: null
    }
  },
  methods: {
    sendMessage () {
      this.$validator.validate().then(value => {
        if (value) {
          this.$store.dispatch('createContact', {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message
          }).then((response) => {
            const h = this.$createElement
            this.$notify({
              title: `Hi, ${this.name}`,
              message: h('i', { style: 'color: teal' }, 'Your message has been sent. Thank you!')
            })
            this.name = null
            this.email = null
            this.subject = null
            this.message = null
            this.$validator.validate().then(() => {
              this.errorBags.clear()
            })
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
