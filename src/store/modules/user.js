const state = {
    users: []
};

const getters = {
    allUsers: state => state.Users
};

const actions = {
    async index({ commit }) {
        const response = await this.$axios.get(
            'users'
        );

        commit('setUsers', response.data);
    },
    async store({ commit }, data) {
        const response = await this.$axios.post(
            'users',
            data
        );

        commit('newUser', response.data);
    },
    async delete({ commit }, id) {
        await this.$axios.delete(`Users/${id}`);

        commit('removeUser', id);
    },
    async update({ commit }, updUser) {
        const response = await this.$axios.put(
            `users/${updUser.id}`,
            updUser
        );

        console.log(response.data);

        commit('updateUser', response.data);
    },
    async show({ commit }, updUser) {
        const response = await this.$axios.put(
            `users/${updUser.id}`,
            updUser
        );

        console.log(response.data);

        commit('updateUser', response.data);
    }
};

const mutations = {
    setUsers: (state, Users) => (state.Users = Users),
    newUser: (state, user) => state.Users.unshift(user),
    removeUser: (state, id) =>
        (state.Users = state.Users.filter(user => user.id !== id)),
    updateUser: (state, updUser) => {
        const index = state.Users.findIndex(user => user.id === updUser.id);
        if (index !== -1) {
            state.Users.splice(index, 1, updUser);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced:true,
    
};