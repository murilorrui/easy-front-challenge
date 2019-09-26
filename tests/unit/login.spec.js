import { shallowMount } from '@vue/test-utils';
import stubs from '@/plugins/vuetify.stubs';
import LoginView from '@/views/login/login.view.vue';

let wrapper = null;

describe('Login view test', () => {
  beforeEach(() => {
    wrapper = shallowMount(LoginView, {
      stubs,
      mocks: {
        $router: { push: jest.fn() },
        $vuetify: {
          theme: {
            themes: {
              light: { secondary: 'COLOR' },
            },
          },
        },
        $refs: {
          form: {
            validate: {},
          },
        },
      },
    });
  });
  it('Must be a vue component', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it('login must be called', () => {
    wrapper.vm.$refs = {
      form: { validate: () => true },
    };
    const spy = jest.spyOn(wrapper.vm.loginService, 'login');
    wrapper.vm.login();
    expect(spy).toHaveBeenCalled();
  });
});
