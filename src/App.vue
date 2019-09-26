<template lang="pug">
  v-app
    app-header
    v-content
      v-container(grid-list-lg fluid)
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
