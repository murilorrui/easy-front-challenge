import MainComponent from '@/main.vue';
import LoginComponent from './login.view.vue';

export default {
  path: '',
  component: MainComponent,
  children: [
    {
      path: '/login',
      component: LoginComponent,
      name: 'login',
    },
  ],
};
