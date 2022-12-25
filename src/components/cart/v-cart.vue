<template>
    <div class="cart">
        <h1>Корзина</h1>
        <p v-if="!cart_data.length">Пусто </p>
        <router-link :to="{name: 'catalog'}">
            <div class="link">
                Каталог
            </div>
        </router-link>
        <v-cart-item
            v-for="(item,index) in cart_data "
            :key="item.article"
            :cart_item_data="item"
            @deleteItemFromCart="deleteItemFromCart(index)"
            @increase="increase(index)"
            @decrease="decrease(index)"
        >
        </v-cart-item>
        <div v-if="this.IS_USER_EXIST.length">
            <router-link :to="{name: 'orders', params:{order:cart_data}}">
                <button
                    @click="deleteCart"
                    class="order"
                    v-if="cart_data.length">Сделать заказ
                </button>
            </router-link>
        </div>
        <div v-else>
            <button
                class="order"
                @click="showAlert"
                v-if="cart_data.length">Сделать заказ</button>
        </div>
        <div class="total_sum">
            <p class="total_title">Итого: </p>
            <p>{{cartTotalSum}} руб.</p>
        </div>
    </div>
</template>

<script>
import VCartItem from "@/components/cart/v-cart-item";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "v-cart",
    components: {
        VCartItem
    },
    data(){
        return {
            isUserExist: null
        }
    },
    props: {
        cart_data: {
            type:Array,
            default() {
                return [];
            }
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'DECREASE_CART_ITEM',
            'INCREASE_CART_ITEM',
            'DELETE_CART'
        ]),
        deleteItemFromCart(index) {
            this.DELETE_FROM_CART(index)
        },
        increase(index){
            this.INCREASE_CART_ITEM(index)
        },
        decrease(index) {
            this.DECREASE_CART_ITEM(index)
        },
        showAlert(){
            alert("Нужно войти перед тем как сделать заказ")
        },
        deleteCart(){
            this.DELETE_CART(this.cart_data);
        }
    },
    computed: {
        cartTotalSum(){
            let result = [];
            if(this.cart_data.length){
                this.cart_data.forEach(item => {
                    result.push(item.price * item.amount)
                })
                result = result.reduce((sum,item) => {
                    return sum + item
                })
            } else {
                result = 0
            }
            return result;
        },
        ...mapGetters([
            'IS_USER_EXIST'
        ])
    },
}
</script>

<style scoped>
.cart{
    margin-bottom: 100px;
}
.link{
    position: absolute;
    top:100px;
    right: 10px;
    padding: 10px;
    border: solid 2px #8a7474;
    color: #8a7474;
}
.link:hover{
    background-color: #8a7474;
    color: antiquewhite;
}
.total_sum{
    position: fixed;
    bottom: 0;
    padding: 24px;
    display: flex;
    justify-content: center;
    background-color: #fae1e1;
    right: 0;
    left: 0;
}
.total_title{
    margin-right: 16px;
}
.order{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: white;
    border-radius: 2px;
    border-color: #a97f7f;
    color: #7a3b3b;
}
.order:hover{
    background-color: #be8686;
    color: black;
    cursor: pointer;
}
</style>