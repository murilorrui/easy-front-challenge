import { shallowMount } from '@vue/test-utils';
import stubs from '@/plugins/vuetify.stubs';
import VehiclesList from '@/views/vehicles/components/vehicles-list.component.vue';

let wrapper = null;

describe('Vehicles view test', () => {
  beforeEach(() => {
    wrapper = shallowMount(VehiclesList, { stubs });
  });
  it('Must be a vue component', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it('Test getVehicles function', () => {
    const spy = jest.spyOn(wrapper.vm, '$emit');
    wrapper.vm.getVehicles();
    expect(spy).toHaveBeenCalled();
  });
  it('Test showModalDeleteVehicle function', () => {
    const item = { id: 'id'};
    const spy = jest.spyOn(wrapper.vm, 'showModalDeleteVehicle');
    wrapper.vm.showModalDeleteVehicle(item);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.vm.vehicleDelete).toBe('id');
    expect(wrapper.vm.modalDeleteVehicle).toBeTruthy();
  });
  it('Test deleteCofirm function', () => {
    const spy = jest.spyOn(wrapper.vm.vehicleService, 'deleteVehicle');
    wrapper.vm.deleteCofirm();
    expect(spy).toHaveBeenCalled();
  });
});
