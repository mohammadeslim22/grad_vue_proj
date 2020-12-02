import axios from 'axios';
import store from '../store';
const baseURL = window.location.protocol+"//"+window.location.hostname+":3000"+'/api/';
let api= axios.create({
    baseURL,
    headers:{
        'Content-Type':'application/json',
    }
});
api.interceptors.response.use((response) => response, (error) => {
    if(error.response.status == 401){
        store.dispatch("auth/logout");
    }
  });
export default api;
// export default $axios;