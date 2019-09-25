import store from '@/store';
import HttpBuilder from './http';
import snackbarEvent from '@/services/snackbar';

class LoginService {
  constructor() {
    this.http = new HttpBuilder();
  }

  login(payload) {
    return this.http.post('/auth', payload).then((resp) => {
      const { token } = resp.data.data;
      localStorage.setItem('TOKEN', token);
      store.commit('TOKEN', token);
      return resp;
    }).catch((error) => {
      const { message } = error.response.data.error;
      snackbarEvent.eventBus.$emit('show-snackbar', { message, type: 'error' });
    });
  }
}

export default new LoginService();
