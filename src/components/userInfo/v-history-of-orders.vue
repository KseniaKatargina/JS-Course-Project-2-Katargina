<template>
<div class="ordersHistory">
<h1>Заказы</h1>
    <div v-for="(item,index) in this.GET_ORDERS" :key="index" class="orders">
        <h3>Заказ {{index + 1}}</h3>
        <div v-for="(i, index) in item " :key="index" class="orderItem">
            <v-modal
                v-if="isModalVisible"
                @closeModal = "closeModal"
                :modalTitle="i.name"
                btn-title="Закрыть"
                @addToCart="closeModal"
            >
                <div class="modalItem">
                    <img
                        class="itemImg"
                        :src=" require('../../assets/images/' + i.image)"
                        alt="img">
                    <p class="itemPrice">{{i.price}} руб.</p>
                    <p class="itemInfo">{{i.info}}</p>
                </div>
            </v-modal>


            <img class="itemImg" :src=" require('../../assets/images/' + i.image)" alt="img">
            <p class="itemName">{{i.name}}</p>
            <p class="itemName">{{i.amount}}</p>
            <p class="itemPrice">{{i.price}} руб.</p>

            <button
                class="showInfo"
                @click="showModal"
            >
                Посмотреть
            </button>
        </div>
    </div>
    <div class="buttons">
        <router-link :to="{name: 'catalog'}">
            <button>Назад
            </button>
        </router-link>
        <router-link :to="{name: 'catalog'}">
            <button @click="removeHistoryOfOrders">Очистить историю заказов</button>
        </router-link>
    </div>
</div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import vModal from "@/components/v-modal";

export default {
    name: "v-history-of-orders",
    data(){
        return{
            isModalVisible: false,
        }
    },
    components: {
        vModal
    },
    props: {
        order: {
            type:Array,
            default() {
                return [];
            }
        },
    },
    computed: {
        ...mapGetters([
            'GET_ORDERS',
        ]),
    },
    methods: {
        ...mapActions([
            'DELETE_HISTORY'
        ]),
        showModal(){
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        removeHistoryOfOrders(){
            this.DELETE_HISTORY()
        }
    }
}
</script>

<style scoped>
.orders{
    display: flex;
    flex-wrap: wrap
}
.itemImg {
    width: 100px;
    height: 150px;
}
.orderItem{
    width: 100%;
    display: flex;
    box-shadow: 0 0 8px 0 lightgrey;
    padding: 16px;
    margin-bottom: 25px;
    justify-content: space-around;
    align-items: center;
}
.showInfo{
    height: 30px;
}
.buttons{
    display: flex;
    justify-content: space-evenly;
}
button{
    width: 250px;
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
h1{
    color: #8a7474;
    border-bottom: 1px solid #8a7474;
}
h3{
    color: #a97f7f;
}

</style>