const state = {
    cars: [],
    loaded: false,
    count: 0
};

const getters = {
    allCars: state => state.cars,

};

const actions = {
    async index({ commit },options) {
        options.exist=1
        const response = await this.$axios.get(
            'cars',
            { params: options }
        );
        commit('setLoaded', true);
        console.log(response.data.data)
        commit('setMeta', response.data.count)
        commit('setCars', response.data.data);
    },
    async existedCars({ commit },options) {
        options.exist=0
        const response = await this.$axios.get(
            'cars',
            { params: options }
        );
        commit('setLoaded', true);
        console.log(response.data)
        commit('setMeta', response.data.count)
        commit('setCars', response.data.data);
    },
    async store({ commit }, data) {
        const response = await this.$axios.post(
            'cars',
            data
        );

        commit('newCar', response.data);
    },
    async delete({ commit }, id) {
        await this.$axios.delete(`cars/${id}`);

        commit('removeCar', id);
    },
    async update({ commit }, updCar) {
        const response = await this.$axios.put(
            `cars/${updCar.id}`,
            updCar
        );

        console.log(response.data);

        commit('updateCar', response.data);
    },
    async show({ commit }, updCar) {
        const response = await this.$axios.put(
            `cars/${updCar.id}`,
            updCar
        );

        console.log(response.data);

        commit('updateCar', response.data);
    }
};

const mutations = {
    setCars: (state, cars) => (state.cars = cars),
    setLoaded: (state, data) => (state.loaded = data),
    setMeta: (state, count) => (state.count = count),
    newCar: (state, car) => state.cars.unshift(car),
    removeCar: (state, id) =>
        (state.cars = state.cars.filter(car => car.id !== id)),
    updateCar: (state, updCar) => {
        const index = state.cars.findIndex(car => car.id === updCar.id);
        if (index !== -1) {
            state.cars.splice(index, 1, updCar);
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