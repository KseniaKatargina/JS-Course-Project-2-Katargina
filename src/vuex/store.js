import Vue from 'vue'
import Vuex from 'vuex'
import actions from "@/vuex/actions/actions";
import mutations from "@/vuex/mutations/mutations";
import getters from "@/vuex/getters/getters";


Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        searchValue: '',
        products: [],
        cart: [],
        user: localStorage.getItem('user') || {},
        orders: JSON.parse(localStorage.getItem('orders')) || [],
    },
    mutations,
    actions,
    getters,
});

export default store;

