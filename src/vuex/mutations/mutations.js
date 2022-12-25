export default {
    SET_SEARCH_VALUE: (state, value) => {
        state.searchValue = value
    },
    SET_PRODUCTS: (state,products) => {
        state.products = products;
    },
    ADD_CART: (state, product) => {
        if (state.cart.length) {
            let isProductExist = false;
            state.cart.forEach(item => {
                if(item.article === product.article){
                    isProductExist = true;
                    item.amount++;
                }
            })
            if(!isProductExist) {
                state.cart.push(product);
                localStorage.setItem("cart", JSON.stringify(state.cart));
            }
        } else {
            state.cart.push(product);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    },
    DELETE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    INCREASE_CART_ITEM: (state, index) => {
        state.cart[index].amount++
        localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    DECREASE_CART_ITEM: (state, index) => {
        if(state.cart[index].amount > 1){
            state.cart[index].amount--;
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    },
    SET_USER(state, user) {
        state.user = user;
        localStorage.setItem('user', JSON.stringify(state.user));
    },
    DELETE_CART(state ){
        let ord =''
        if(localStorage.getItem('orders')){
            ord = localStorage.getItem('orders');
        }
        localStorage.setItem('orders', ord + localStorage.getItem('cart'))
        state.orders.push(state.cart)
        state.cart = [];
        localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    DELETE_HISTORY() {
        localStorage.removeItem('orders')
        // localStorage.setItem('orders', [])
        // state.orders = [];
        // state.orders = JSON.parse(localStorage.getItem('orders'));
    }
}