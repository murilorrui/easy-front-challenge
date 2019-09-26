<template lang="pug">
  v-container(grid-list-lg fluid)
    .login
      v-form(
        ref="form"
        v-model="valid"
        lazy-validation
        )
        v-card
          v-card-text
            v-img(
              contain
              height="50"
              class="ma-3"
              :src="require('@/assets/logo_ec.svg')"
              )
            v-text-field(
              required
              label="email"
              :rules="emailRules"
              v-model="payload.email"
              )
            v-text-field(
              required
              label="password"
              :append-icon="showPass ? 'visibility' : 'visibility_off'"
              :type="showPass ? 'text' : 'password'"
              :rules="passwordRules"
              v-model="payload.password"
              @click:append="showPass = !showPass"
              )
          v-card-actions
            v-btn(
              dark
              block
              rounded
              @click="login"
              elevation="0"
              :color="$vuetify.theme.themes.light.secondary"
              ) login
</template>

<script>
import LoginService from '@/services/login';

export default {
  data: () => ({
    payload: {
      email: 'frontend-dev@easycarros.com',
      password: 'Fr0nt3ndR0ck5!',
    },
    emailRules: [
      v => !!v || 'Esse campo e obrigatorio',
      v => /.+@.+\..+/.test(v) || 'E-mail precisa ser valido',
    ],
    passwordRules: [
      v => !!v || 'Esse campo e obrigatorio',
    ],
    valid: false,
    loginService: LoginService,
    showPass: false,
  }),
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.loginService.login(this.payload).then(() => {
          this.$router.push({ name: 'vehicles' });
        });
      }
    },
  },
};
</script>

<style lang="sass" scoped>
  .login
    border: 0
    display: block
    margin: 0
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    +media-min-sm
      height: 300px
      width: 500px
</style>
