<template>
  <div class="card">
    <b-form class="card-body" @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else.">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          name="email"
          v-validate="'required|email'"
          required
          placeholder="Enter email">
        </b-form-input>
        <span class="small text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="password"
          required>
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LoginComponent',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  watch: {
    errors () {
      // console.log('x', this.errors)
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const auth = {
        username: this.form.email,
        password: this.form.password
      }
      this.$store.dispatch('login', auth).then(() => {
        this.$store.dispatch('checkAuth').then((response) => {
          if (response) {
            this.$router.push({ name: 'adminPanel' })
          }
        })
      }).catch(() => {})
    }
  }
}
</script>
