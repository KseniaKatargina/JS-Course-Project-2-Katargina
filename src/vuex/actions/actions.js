import axios from "axios";

export default {
    GET_PRODUCTS({commit}) {
        return axios('http://localhost:3000/products', {
            method:"GET"
        })
            .then(products => {
                commit('SET_PRODUCTS', products.data);
                return products;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    },
    ADD_TO_CART({commit}, product) {
        commit('ADD_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
        commit('DELETE_FROM_CART', index)
    },
    INCREASE_CART_ITEM({commit}, index) {
        commit('INCREASE_CART_ITEM', index)
    },
    DECREASE_CART_ITEM({commit},index) {
        commit('DECREASE_CART_ITEM', index)
    },
    SET_SEARCH_VALUE({commit}, value) {
        commit('SET_SEARCH_VALUE', value)
    },
    IS_USER_EXIST({commit}) {
        commit('IS_USER_EXIST')
    },
    SET_USER({commit}, user){
        commit('SET_USER', user)
    },
    DELETE_CART({commit}, cart_data) {
        commit('DELETE_CART', cart_data)
    },
    DELETE_HISTORY({commit}){
        commit('DELETE_HISTORY')
    }

}