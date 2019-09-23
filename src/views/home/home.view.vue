<template lang="pug">
  .home-view
    new-vehicle(@get-vehicles="getVehicles")
    vehicles-list(
      :plates="plates"
      :loading="loading"
      @get-vehicles="getVehicles"
      )
</template>

<script>
import VehicleService from '@/services/vehicle';
import NewVehicle from './components/new-vehicle.component.vue';
import VehiclesList from './components/vehicles-list.component.vue';

export default {
  components: {
    NewVehicle,
    VehiclesList,
  },
  data: () => ({
    plates: [],
    vehicleService: VehicleService,
    loading: false,
  }),
  methods: {
    getVehicles() {
      this.loading = true;
      this.vehicleService.getVehicles().then((resp) => {
        this.loading = false;
        this.plates = resp;
      });
    },
  },
  created() {
    this.getVehicles();
  },
};
</script>
