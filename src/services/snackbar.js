import Vue from 'vue';

class SnackbarEvent {
  constructor() {
    this.eventBus = new Vue();
  }

  showSnackbar(payload) {
    this.eventBus.$emit('show-snackbar', payload);
  }
}

const snackbarEvent = new SnackbarEvent();

export default snackbarEvent;
