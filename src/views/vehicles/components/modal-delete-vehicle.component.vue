<template lang="pug">
  modal-default(
    v-model="modalDeleteVehicle"
    @toggle-modal="toggleModal"
    width="350"
    )
    v-layout
      span Deseja realmente deletar esse veículo?
    v-layout.pa-3(
      slot="actions"
      )
      v-btn(
        elevation="0"
        @click="toggleModal(false)"
        ) não
      v-spacer
      v-btn(
        dark
        elevation="0"
        @click="deleteCofirm"
        :color="$vuetify.theme.themes.light.secondary"
        ) sim
</template>

<script>
import ModalDefault from '@/components/modal/modal.component.vue';

export default {
  components: {
    ModalDefault,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    modalDeleteVehicle() {
      return this.value;
    },
  },
  methods: {
    toggleModal(value) {
      this.$emit('toggle-modal', value);
    },
    deleteCofirm() {
      this.$emit('delete-confirm');
    },
  },
};
</script>
