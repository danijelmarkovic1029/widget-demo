export default {
	namespaced: true,
	state: {
		propertyDetails: {},
	},
	mutations: {
		setPropertyDetails(state, payload) {
			state.propertyDetails = payload;
		},
	},
	actions: {
		updatePropertyDetails({ commit }, details) {
			commit('setPropertyDetails', details);
		},
	},
	getters: {
		getPropertyDetails: (state) => state.propertyDetails,
	},
};