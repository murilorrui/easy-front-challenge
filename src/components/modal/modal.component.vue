<template lang="pug">
  .modal.text-center
    v-dialog(
      v-model="modal"
      :width="width"
      )
      v-card
        v-card-title(
          class="headline"
          primary-title
          )
          slot(name="header")
          v-spacer
          v-btn.modal__close(
            icon
            @click="close"
            )
            v-icon(color="grey darken-1") close
        v-card-text
          slot
        v-divider
        v-card-actions
          slot(name="actions")
</template>

<script>
export default {
  name: 'Modal',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: 500,
    },
  },
  computed: {
    modal: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('toggle-modal', value);
      },
    },
  },
  methods: {
    close() {
      this.modal = false;
    },
  },
};
</script>
