<template lang="pug">
  .vehicles-list
    modal-delete-vehicle(
      v-model="modalDeleteVehicle"
      @toggle-modal="toggleModal"
      @delete-confirm="deleteCofirm"
      )
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
        v-data-table.vehicles-list__table(
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
          v-btn(
            :outlined="$vuetify.breakpoint.xsOnly"
            :small="$vuetify.breakpoint.xsOnly"
            :icon="$vuetify.breakpoint.smAndUp"
            color="red"
            @click="showModalDeleteVehicle(item)"
            )
            v-icon(
              small
              ) delete
</template>

<script>
import VehicleService from '@/services/vehicle';
import ModalDeleteVehicle from './modal-delete-vehicle.component.vue';

export default {
  components: {
    ModalDeleteVehicle,
  },
  props: {
    plates: Array,
    loading: Boolean,
  },
  data: () => ({
    search: '',
    vehicleService: VehicleService,
    modalDeleteVehicle: false,
    vehicleDelete: '',
    headers: [
      {
        text: 'Placa',
        align: 'left',
        sortable: false,
        value: 'plate',
        width: '95%',
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
    showModalDeleteVehicle(item) {
      this.modalDeleteVehicle = true;
      this.vehicleDelete = item.id;
    },
    deleteCofirm() {
      this.vehicleService.deleteVehicle(this.vehicleDelete).then(() => {
        this.getVehicles();
      });
    },
    toggleModal(value) {
      this.modalDeleteVehicle = value;
    },
  },
};
</script>

<style lang="sass" scoped>
  .vehicles-list
    &__table
      text-transform: uppercase
    &__title
      color: $color-primary
</style>
