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
    async login({ commit }, data) {
        this.state.overlay = true;
        console.log(data)
        let response = await this.$axios.post('users/login', data)
        let user = response.data.user;
        let ddata = response.data;
        if (user) {
            console.log(ddata);
            commit('setUser', ddata);
            commit('setLogged', true);
            this.state.overlay = false;
            localStorage.clear()
            localStorage.user_data = JSON.stringify({
                user: user,
                token: ddata.token
            });
            this.dispatch("auth/load", ddata.token)
            // let refresh_time = data.token.expires_in * 1000;
            // refresh_time -= parseInt(refresh_time / 4);
            // setTimeout(() => {
            //     this.dispatch('refresh');
            // }, refresh_time);
        } else {

        }


    },
    update({ commit }, upUser) {
        console.log(upUser)
        this.$axios.post(`users/:${upUser.id}`, upUser).then((response) => {
            commit('setUser', user);
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