import { shallowMount } from '@vue/test-utils';
import stubs from '@/plugins/vuetify.stubs';
import MainComponent from '@/main.vue';

let wrapper = null;

describe('Main component test', () => {
  beforeEach(() => {
    wrapper = shallowMount(MainComponent, {
      stubs,
      mocks: {
        $router: { push: jest.fn() },
      },
    });
  });
  it('Must be a vue component', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it('Test getToken function', () => {
    localStorage.setItem('TOKEN', 'token');
    const spy = jest.spyOn(wrapper.vm, 'getToken');
    wrapper.vm.getToken();
    expect(wrapper.vm.token).toBe('token');
    expect(spy).toHaveBeenCalled();
  });
  it('startSnackBar must be called', () => {
    const spy = jest.spyOn(wrapper.vm, 'startSnackBar');
    wrapper.vm.startSnackBar();
    expect(spy).toHaveBeenCalled();
  });
});
