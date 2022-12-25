<template>
<div class="header">
    <router-link :to="{name: 'catalog'}">
        <img src="../assets/images/logo.png" alt="">
    </router-link>
    <div class="search">
    <router-link :to="{name: 'cart', params: {cart_data:CART}}">
        <div class="link">
            Товаров в корзине: {{CART.length}}
        </div>
    </router-link>
        <div v-if="!IS_USER_EXIST.length">
            <router-link :to="{name: 'login'}">
                <div class="link">
                    Войти
                </div>
            </router-link>
        </div>
        <input
            type="text"
            v-model="searchValue"
        >
        <button class="searchBtn">
            <i class="material-icons"
               @click="search(searchValue)">search</i>
        </button>
        <button class="searchBtn">
            <i class="material-icons"
            @click="clear">
                cancel
            </i>
        </button>
    </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "v-header",
    data(){
        return{
            searchValue:''
        }
    },
    methods:{
        ...mapActions([
            'SET_SEARCH_VALUE'
        ]),
        search(value){
            this.SET_SEARCH_VALUE(value);
            if(this.$route.path !== '/'){
                this.$router.push('/')
            }
        },
        clear(){
            this.searchValue = ''
            this.SET_SEARCH_VALUE();
            if(this.$route.path !== '/') {
                this.$router.push('/')
            }
        }
    },
    computed: {
        ...mapGetters([
            'CART',
        'SEARCH_VALUE',
            'IS_USER_EXIST'
        ])
    }
}
</script>

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fce9e9;
    padding: 16px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;

}
img{
    height: 50px;
}
.search{
    padding-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.searchBtn{
    margin-left: 16px;
    background: transparent;
    border: none;
}
.searchBtn:hover{
    cursor: pointer;
    color: #7a3b3b;
}
.link{
    color: #8a7474;
    margin: 15px;
}
.link:hover{
    color: #130808;
}
a{
    text-decoration: none;
}
</style>