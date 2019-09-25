import LoginComponent from './login.view.vue';
import store from '@/store';

export default {
  path: '/login',
  component: LoginComponent,
  name: 'login',
  beforeEnter(from, to, next) {
    if (store.getters.token) {
      next({ name: 'vehicles' });
      return;
    }
    next();
  },
};
