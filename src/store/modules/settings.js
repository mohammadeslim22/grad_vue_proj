const state = {
    settings: [],
    loaded: false,
    count: 0
};

const getters = {
    allSettings: state => state.settings,

};

const actions = {
    async index({ commit }) {
        const response = await this.$axios.get(
            'settings',
        );
        console.log(response.data)
        commit('setSettings', response.data);
    },
    async existedSettings({ commit }) {

        const response = await this.$axios.get(
            'settings'
        );

        commit('setSettings', response.data.data);
    },
    // async store({ commit }, data) {
    //     const response = await this.$axios.post(
    //         'settings',
    //         data
    //     );

    //     // commit('newCar', response.data);
    // },
    // async delete({ commit }, id) {
    //     await this.$axios.delete(`settings/${id}`);

    //     commit('removeCar', id);
    // },
    async update({ commit }, updSetting) {
        console.log("updSetting");
        console.log(updSetting);
        const response = await this.$axios.post(
            `settings`,
            updSetting
        );
        commit('updateSettings', response.data);
    },
    // async show({ commit }, updSetting) {
    //     const response = await this.$axios.put(
    //         `settings/${updSetting.id}`,
    //         updSetting
    //     );
    //     console.log(response.data);

    //     commit('updateSettings', response.data);
    // }
};

const mutations = {
    setSettings: (state, settings) => (state.settings = settings),
    setLoaded: (state, data) => (state.loaded = data),
    // setMeta: (state, count) => (state.count = count),
    // newCar: (state, car) => state.settings.unshift(car),
    // removeCar: (state, id) =>
    //     (state.settings = state.settings.filter(car => car.id !== id)),
    updateSettings: (state, updCar) => {
        const index = state.settings.findIndex(car => car.id === updCar.id);
        if (index !== -1) {
            state.settings.splice(index, 1, updCar);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,

};