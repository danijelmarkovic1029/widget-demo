import { createStore } from 'vuex';
import property from './property';

const store = createStore({
  modules: {
    property,
  },
});

export default store;