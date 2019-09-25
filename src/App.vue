<template lang="pug">
  v-app
    snack-bar(:snackbar="snackbar" v-model="showSnackbar")
    app-header
    v-content
      v-container(grid-list-lg fluid)
        router-view
</template>

<script>
import AppHeader from './components/layout/header.component.vue';
import SnackBar from './components/layout/snackbar.component.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    SnackBar,
  },
  data: () => ({
    snackbar: {
      color: '',
      message: '',
    },
    showSnackbar: false,
  }),
};
</script>

<style src="./assets/styles/global.sass" lang="sass"></style>
