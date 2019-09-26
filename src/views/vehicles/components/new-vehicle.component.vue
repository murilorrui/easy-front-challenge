<template lang="pug">
  v-container(grid-list-lg)
    v-card
      v-card-title
        span.add-vehicle__title Adicionar Veículo
      v-card-text
        v-form(
          ref="form"
          v-model="valid"
          lazy-validation
          )
          v-layout(
            row
            wrap
            align-center
            )
            v-flex.xs8.sm11
              v-text-field(
                :counter="7"
                label="Placa"
                v-model="plate"
                @blur="resetValidation"
                :rules="plateRules"
                )
            v-flex.xs4.sm1
              v-btn(
                block
                rounded
                :elevation="0"
                :disabled="!valid"
                @click="addVehicle"
                :color="$vuetify.theme.themes.light.secondary"
                )
                v-icon.white--text add
</template>

<script>
import VehicleService from '@/services/vehicle';

export default {
  data: () => ({
    plate: '',
    valid: false,
    vehicleService: VehicleService,
    plateRules: [
      v => !!v || 'Esse campo e obrigatorio',
      v => /[a-zA-Z]{3}[0-9]{4}/.test(v) || 'O formato informado nao e valido',
    ],
  }),
  methods: {
    addVehicle() {
      if (this.$refs.form.validate()) {
        this.vehicleService.addVehicle(this.plate).then(() => {
          this.getVehicles();
          this.formReset();
        });
      }
    },
    formReset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      if (!this.plate || this.plate.length === 0) {
        this.$refs.form.resetValidation();
      }
    },
    getVehicles() {
      this.$emit('get-vehicles');
    },
  },
};
</script>

<style lang="sass">
  .add-vehicle
    &__title
      color: $color-primary
</style>
