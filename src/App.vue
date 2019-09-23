<template lang="pug">
  v-app
    app-header
    v-content
      router-view
</template>

<script>
import AppHeader from './components/layout/header.component.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>
