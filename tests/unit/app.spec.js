import { shallowMount } from '@vue/test-utils';
import stubs from '@/plugins/vuetify.stubs';
import AppComponent from '@/main.vue';

let wrapper = null;

describe('App component test', () => {
  beforeEach(() => {
    wrapper = shallowMount(AppComponent, { stubs });
  });
  it('Must be a vue component', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
