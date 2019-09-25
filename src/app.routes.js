import AppComponent from './App.vue';
import store from './store';
import VehiclesView from './views/vehicles/vehicles.view.vue';

export default {
  path: '',
  name: 'app',
  component: AppComponent,
  children: [
    {
      path: 'vehicles',
      component: VehiclesView,
      name: 'vehicles',
    },
  ],
  beforeEnter(from, to, next) {
    if (store.getters.token) {
      next();
      return;
    }
    next({ name: 'login' });
  },
};
