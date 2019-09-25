<template lang="pug">
  .main
    snack-bar(
      :snackbar="snackbar"
      v-model="showSnackbar"
      @toggle-snackbar="toggleSnackBar"
      )
    router-view
</template>

<script>
import SnackBar from './components/layout/snackbar.component.vue';
import snackbarEvent from './services/snackbar';
import store from './store';

export default {
  name: 'Main',
  components: {
    SnackBar,
  },
  data: () => ({
    snackbar: {
      color: '',
      message: '',
    },
    showSnackbar: false,
  }),
  methods: {
    toggleSnackBar(value) {
      this.showSnackbar = value;
    },
  },
  created() {
    if (localStorage.getItem('TOKEN')) {
      const token = localStorage.getItem('TOKEN');
      store.commit('TOKEN', token);
      this.$router.push({ name: 'vehicles' });
    }
    snackbarEvent.eventBus.$on('show-snackbar', (payload) => {
      this.showSnackbar = true;
      this.snackbar = payload;
    });
  },
};
</script>

<style src="./assets/styles/global.sass" lang="sass"></style>
