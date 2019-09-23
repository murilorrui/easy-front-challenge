import Vue from 'vue';
import Router from 'vue-router';
import AppRoutes from './app.routes';
import LoginRoute from './views/login/login.route';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    AppRoutes,
    LoginRoute,
  ],
});

export default router;
