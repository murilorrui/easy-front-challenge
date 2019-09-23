import AppComponent from './App.vue';
import store from './store';
import HomeComponent from './views/home/home.view.vue';

export default {
  path: '',
  name: 'app',
  component: AppComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
      name: 'home',
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
