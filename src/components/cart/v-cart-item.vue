<template>
<div class="cartItem">
    <img class="cartItemImg" :src=" require('../../assets/images/' + cart_item_data.image)" alt="img">
    <div class="cartItemInfo">
        <p class="itemName">{{cart_item_data.name}}</p>
        <p class="itemPrice">{{cart_item_data.price}} руб.</p>
    </div>
    <div class="cartItemAmount">
        <p>Количество</p>
        <span>
            <span class="amountBtn" @click="decrease"> - </span>
            {{cart_item_data.amount}}
            <span class="amountBtn" @click="increase"> + </span>
        </span>
    </div>
    <button
        class="delete"
        @click="deleteItemFromCart">
        Удалить из корзины</button>
</div>
</template>

<script>


export default {
    name: "v-cart-item",
    props: {
        cart_item_data: {
            type:Object,
            default(){
                return{}
            }
        }
    },
    methods: {
        deleteItemFromCart(){
            this.$emit('deleteItemFromCart')
        },
        decrease(){
            this.$emit('decrease')
        },
        increase(){
            this.$emit('increase')
        }
    }
}
</script>

<style scoped>
.cartItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    box-shadow: 0 0 8px 0 lightgrey;
    padding: 16px;
    margin-bottom: 16px;
}
.cartItemImg{
    max-width: 100px;
}
.amountBtn:hover{
    cursor: pointer;
}
.delete{
    background-color: white;
    border-radius: 2px;
    border-color: #a97f7f;
    color: #7a3b3b;
}
.delete:hover{
    background-color: #be8686;
    color: black;
    cursor: pointer;
}

</style>