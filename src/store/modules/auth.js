const state = {
    user: null,
    token: null,
    errors: null,
    logged: false
};
const getters = {
    all: state => state.posts
};
const actions = {
    login({ commit }, data) {
        this.state.overlay = true;
        console.log(data)
        this.$axios.post('users/login', data).then((response) => {
            let user = response.data.user;
            let data = response.data;
            if (response.data.user) {
                console.log(data);
                commit('setUser', user);
                commit('setLogged', true);
                this.state.overlay = false;
                localStorage.user_data = JSON.stringify({
                    user: data.user,
                    token: data.token
                });
                this.dispatch("auth/load",data.token)
                // let refresh_time = data.token.expires_in * 1000;
                // refresh_time -= parseInt(refresh_time / 4);
                // setTimeout(() => {
                //     this.dispatch('refresh');
                // }, refresh_time);
            } else {

            }

        })
    },
    me({ commit }) {
        this.$axios.get('/auth/me').then((response) => {
            commit('setUser', response.data);
        }).catch(err => {
            console.log(err);
        });
    },
    refresh({ commit }) {
        console.log("refreshing .. ");
        this.$axios.post('/auth/refresh').then((response) => {
            commit('setToken', response.data);
            let refresh_time = response.data.token.expires_in * 1000;
            refresh_time -= parseInt(refresh_time / 4);
            setTimeout(() => {
                this.dispatch('refresh');
            }, refresh_time);
        }).catch(err => {
            console.log(err);
        });
    },
    load({ commit }, token) {
        console.log(token);
        this.$axios.defaults.headers.common['Authorization'] = "Bearer " + token;
        commit('setToken', token);
    },
    async logout({ commit }) {
        //await this.$axios.post("/auth/logout");
        commit('removeUser');
        commit('removeToken');
        commit('changeLoggedInStatus');
        localStorage.clear();
    }
}
const mutations = {
    setUser: (state, data) => {
        state.user = data.user;
        state.token = data.token;
        state.logged = true;
    },
    setToken: (state, token) => {
        state.token = token
    },
    setErrors: (state, data) => {
        state.errors = data;
    },
    setLogged: (state, data) => {
        state.logged = data;
    },
    changeLoggedInStatus: (state) => state.logged = false,
    removeToken: (state) => state.token = null,
    removeUser: (state) => state.user = null
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}