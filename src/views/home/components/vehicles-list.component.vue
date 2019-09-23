<template lang="pug">
  v-container(grid-list-lg)
    v-card
      v-card-title.vehicles-list__title
        | Veículos
        div(class="flex-grow-1")
        v-text-field(
          v-model="search"
          append-icon="search"
          label="Procurar veículo"
          single-line
          hide-details
          )
      v-data-table(
       :headers="headers"
       :items="plates"
       :items-per-page="5"
       :search="search"
       :loading="loading"
       loading-text="Carregando..."
       no-data-text="Nenhum veículo cadastrado."
       no-results-text="Nenhum veículo encontrado."
       )
       template(v-slot:item.action="{ item }")
        v-icon(
          small
          @click="deleteVehicle(item)"
          ) delete
</template>

<script>
import VehicleService from '@/services/vehicle';

export default {
  props: {
    plates: Array,
    loading: Boolean,
  },
  data: () => ({
    search: '',
    vehicleService: VehicleService,
    headers: [
      {
        text: 'Placa',
        align: 'left',
        sortable: false,
        value: 'plate',
        width: '90%',
      },
      {
        value: 'action',
        sortable: false,
      },
    ],
  }),
  methods: {
    getVehicles() {
      this.$emit('get-vehicles');
    },
    deleteVehicle(item) {
      this.vehicleService.deleteVehicle(item.id).then(() => {
        this.getVehicles();
      });
    },
  },
};
</script>

<style lang="sass" scoped>
  .vehicles-list
    &__title
      color: $color-primary
</style>
