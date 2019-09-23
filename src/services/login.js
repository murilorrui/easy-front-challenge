import store from '@/store';
import HttpBuilder from './http';

class LoginService {
  constructor() {
    this.http = new HttpBuilder();
  }

  login(payload) {
    return this.http.post('/auth', payload).then((resp) => {
      const { token } = resp.data.data;
      store.commit('TOKEN', token);
      return resp;
    });
  }
}

export default new LoginService();
