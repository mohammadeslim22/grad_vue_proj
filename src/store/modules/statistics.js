const state = {
    transactions: [],
    invoices: [],
    week_entries: [],
    carsNo:0,
    parking_visits:0,
    total_revenue:0,

    loaded: false

};

const getters = {
    allStatistics: state => state.statistics,

};

const actions = {
    async index({ commit }) {
        const response = await this.$axios.get(
            'statistics',
        );
        console.log(response.data)
        commit('setTransactions', response.data.transactions);
        commit('setInvoices', response.data.invoices);
        commit('setCarNo', response.data.carsNo);
        commit('setParkingVisits', response.data.parkingVisits);
        commit('setTotalRevenue', response.data.revenue);
        commit('setLoaded', true);
    },
};

const mutations = {
    setTransactions: (state, transactions) => (state.transactions = transactions),
    setInvoices: (state, invoices) => (state.invoices = invoices),
    setWeek_entries: (state, week_entries) => (state.week_entries = week_entries),
    setLoaded: (state, data) => (state.loaded = data),
    setParkingVisits: (state, Visits) => (state.parking_visits = Visits),
    setTotalRevenue: (state, revenue) => (state.total_revenue = revenue),
    setCarNo: (state, carsNo) => (state.carsNo = carsNo),


};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,

};