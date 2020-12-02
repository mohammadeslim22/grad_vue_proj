const state = {
    invoices: [],
    loaded: false,
    count: 0
};

const getters = {
    allInvoices: state => state.invoices
};

const actions = {
    async index({ commit }, options) {
        const response = await this.$axios.get(
            'invoices',
            { params: options }
        );
        commit('setLoaded', true);
        commit('setMeta', response.data.count)
        commit('setInvoices', response.data.data);
    },
    async store({ commit }, data) {
        const response = await this.$axios.post(
            'invoices',
            data
        );

        commit('newInvoice', response.data);
    },
    async delete({ commit }, id) {
        await this.$axios.delete(`invoices/${id}`);

        commit('removeInvoice', id);
    },
    async update({ commit }, updInvoice) {
        const response = await this.$axios.put(
            `invoices/${updInvoice.id}`,
            updInvoice
        );

        console.log(response.data);

        commit('updateInvoice', response.data);
    },
    async show({ commit }, updInvoice) {
        const response = await this.$axios.put(
            `invoices/${updInvoice.id}`,
            updInvoice
        );

        console.log(response.data);

        commit('updateInvoice', response.data);
    }
};

const mutations = {
    setInvoices: (state, invoices) => (state.invoices = invoices),
    setLoaded: (state, data) => (state.loaded = data),
    setMeta: (state, count) => (state.count = count),
    newInvoice: (state, Invoice) => state.invoices.unshift(Invoice),
    removeInvoice: (state, id) =>
        (state.invoices = state.invoices.filter(Invoice => Invoice.id !== id)),
    updateInvoice: (state, updInvoice) => {
        const index = state.invoices.findIndex(Invoice => Invoice.id === updInvoice.id);
        if (index !== -1) {
            state.invoices.splice(index, 1, updInvoice);
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