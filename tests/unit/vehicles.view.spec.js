import { shallowMount } from '@vue/test-utils';
import stubs from '@/plugins/vuetify.stubs';
import VehiclesView from '@/views/vehicles/vehicles.view.vue';

let wrapper = null;

describe('Vehicles view test', () => {
  beforeEach(() => {
    wrapper = shallowMount(VehiclesView, { stubs });
  });
  it('Must be a vue component', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it('Test getVehicles function', () => {
    const spy = jest.spyOn(wrapper.vm.vehicleService, 'getVehicles');
    wrapper.vm.getVehicles();
    expect(spy).toHaveBeenCalled();
  });
});
