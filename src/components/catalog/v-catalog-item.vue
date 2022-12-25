<template>
    <div class="catalogItem">

        <v-modal
        v-if="isModalVisible"
        @closeModal = "closeModal"
        @addToCart="addToCart"
        btn-title="Добавить в корзину"
        :modalTitle="product_data.name"
        >
            <div class="modalItem">
                    <img
                        class="itemImg"
                        :src=" require('../../assets/images/' + product_data.image)"
                        alt="img">
                <p class="itemPrice">{{product_data.price}} руб.</p>
                <p class="itemInfo">{{product_data.info}}</p>
            </div>
        </v-modal>


        <img class="itemImg" :src=" require('../../assets/images/' + product_data.image)" alt="img">
        <p class="itemName">{{product_data.name}}</p>
        <p class="itemPrice">{{product_data.price}} руб.</p>

        <button
            class="showInfo"
            @click="showModal"
        >
            Посмотреть
        </button>
        <div class="buttons">
            <button
                class="cartBtn"
                @click="deleteItemFromCart"
            >Удалить из корзины</button>
            <button
                class="cartBtn"
                @click="addToCart"
            >Добавить в корзину</button>
        </div>

    </div>

</template>

<script>
import vModal from "../v-modal"
export default {
    name: "v-catalog-item",
    data(){
        return{
            isModalVisible: false
        }
    },
    components: {
        vModal
    },
    props: {
        product_data: {
            type:Object,
            default() {
                return{}
            }
        }
    },
    methods: {
        deleteItemFromCart(){
            this.$emit('deleteItemFromCart')
        },
        addToCart(){
            this.$emit('addToCart',this.product_data)
        },
        showModal(){
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    },
    mounted() {
        this.$set(this.product_data, 'amount', 1)
    },
}
</script>

<style scoped>
.catalogItem{
    box-shadow: 0 0 8px 0 lightgrey;
    padding: 16px;
    margin-bottom: 25px;
}
.itemImg {
    width: 300px;
    height: 400px;
}
.buttons{
    display: flex;
    justify-content: space-around
}
button{
    background-color: #e7dee0;
    border-radius: 2px;
    border-color: #d5c9c9;
    color: #130808;
    box-shadow: 0 0 8px 0 lightgrey;
}
button:hover{
    background-color: #be8686;
    color: black;
    cursor: pointer;
}
.cartBtn{
    margin-top: 10px;
}
</style>