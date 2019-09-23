import HttpBuilder from './http';

class VehicleService {
  constructor() {
    this.http = new HttpBuilder();
  }

  getVehicles() {
    return this.http.get('/vehicle').then(resp => resp.data.data);
  }

  addVehicle(payload) {
    return this.http.post('/vehicle', { plate: payload }).then(resp => resp);
  }

  deleteVehicle(payload) {
    return this.http.delete(`/vehicle/${payload}`).then(resp => resp);
  }
}

export default new VehicleService();
