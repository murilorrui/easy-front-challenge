<template lang="pug">
  v-snackbar.snackbar(
    dark
    bottom
    v-model="showSnackbar"
    :timeout="timeout"
    :color="getColor"
    :multi-line="$vuetify.breakpoint.smAndDown"
  )
    span {{ snackbar.message }}
    v-btn(
      color="pink"
      text
      @click="showSnackbar = false"
     )
      v-icon clear
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    snackbar: Object,
  },
  computed: {
    getColor() {
      const option = {
        success: '#1D6D2A',
        error: '#EC3636',
        alert: '#E2BF31',
        info: '#214EF1',
      };
      return option[this.snackbar.type];
    },
    showSnackbar: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('toggle-snackbar', value);
      },
    },
  },
  data: () => ({
    timeout: 999999999,
  }),
};
</script>

<style lang="sass" scoped>
  .snackbar
    font-family: $primary-font-normal
    font-size: 1.1em
    margin-bottom: 10px
    &__icon
      margin-right: 5px
    &__btn-close
      background: rgba(#fff, .4)
      position: absolute
      right: 10px
    &__btn-close:hover
      background: rgba(#fff, .6)
</style>
