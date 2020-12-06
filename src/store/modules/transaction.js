const state = {
    Transactions: [],
    loaded: false,
    count: 0
};

const getters = {
    allTransactions: state => state.Transactions
};

const actions = {
    async index({ commit }, options) {
        const response = await this.$axios.get(
            'transactions', {
            params: options
        }
        );
        commit('setLoaded', true);
        commit('setMeta', response.data.count)
        commit('setTransactions', response.data.data);
    },
    async store({ commit }, data) {
        console.log(data)
        const response = await this.$axios.post(
            'transactions',
            data
        );

        commit('newTransaction', response.data);
    },
    async delete({ commit }, id) {
        await this.$axios.delete(`transactions/${id}`);

        commit('removeTransaction', id);
    },
    async update({ commit }, updTransaction) {
        const response = await this.$axios.put(
            `transactions/${updTransaction.id}`,
            updTransaction
        );

        console.log(response.data);

        commit('updateTransaction', response.data);
    },
    async show({ commit }, updTransaction) {
        const response = await this.$axios.put(
            `transactions/${updTransaction.id}`,
            updTransaction
        );

        console.log(response.data);

        commit('updateTransaction', response.data);
    }
};

const mutations = {
    setTransactions: (state, Transactions) => (state.Transactions = Transactions),
    setLoaded: (state, data) => (state.loaded = data),
    setMeta: (state, count) => (state.count = count),
    newTransaction: (state, transaction) => state.Transactions.unshift(transaction),
    removeTransaction: (state, id) =>
        (state.Transactions = state.Transactions.filter(transaction => transaction.id !== id)),
    updateTransaction: (state, updTransaction) => {
        const index = state.Transactions.findIndex(transaction => transaction.id === updTransaction.id);
        if (index !== -1) {
            state.Transactions.splice(index, 1, updTransaction);
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