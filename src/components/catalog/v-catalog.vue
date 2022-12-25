<template>
<div class="catalog">
    <h1>Магазин пижам</h1>
    <div class="filters">
        <v-select
            :selected="selected"
            :options="categories"
            @selectOption="sortByCategories"/>
    </div>
    <div class="list">
        <v-catalog-item
            v-for="product in sortProducts"
            :key="product.article"
            :product_data="product"
            @deleteItemFromCart="deleteItemFromCart(index)"
            @addToCart="addToCart"
        >
        </v-catalog-item>
    </div>
</div>
</template>

<script>
import VCatalogItem from "@/components/catalog/v-catalog-item";
import {mapActions, mapGetters} from 'vuex'
import vSelect from "@/components/v-select"

export default {
    name: "v-catalog",
    components: {
        VCatalogItem,
        vSelect
    },
    data(){
        return {
            categories: [
                {name: 'Все', value: 'ALL'},
                {name: 'Мужские', value: 'м'},
                {name: 'Женские', value: 'ж'},
            ],
            selected:'Все',
            sortedProducts:[]
        }
    },
    methods:{
        ...mapActions([
            'GET_PRODUCTS',
            'ADD_TO_CART',
            'DELETE_FROM_CART',
        ]),
        deleteItemFromCart(index) {
            this.DELETE_FROM_CART(index)
        },
        addToCart(data){
            this.ADD_TO_CART(data);
        },
        sortByCategories(category){
            this.sortedProducts=[]
            this.PRODUCTS.map((item ) => {
                if(item.category===category.name){
                    this.sortedProducts.push(item)
                }
            })
            this.selected=category.name
        },
        sortBySearchValue(value) {
            this.sortedProducts=[...this.PRODUCTS]
            if(value) {
                this.sortedProducts = this.sortedProducts.filter((item) => {
                    return item.name.toLowerCase().includes(value.toLowerCase())
                })
            } else {
                this.sortedProducts = this.PRODUCTS
            }
        }
    },
    watch: {
        SEARCH_VALUE(){
            this.sortBySearchValue(this.SEARCH_VALUE)
        }
    },
    mounted() {
        this.GET_PRODUCTS()
            .then(response => {
                if(response.data){
                    this.sortByCategories();
                    this.sortBySearchValue(this.SEARCH_VALUE)
                }
            })
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART',
            'SEARCH_VALUE'
            ]),
        sortProducts(){
            if (this.sortedProducts.length){
                return this.sortedProducts
            } else {
                return  this.PRODUCTS
            }
        }
    }
}
</script>

<style scoped>
.list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
.link{
    position: absolute;
    top:100px;
    right: 10px;
    padding: 16px;
    border: solid 1px lightgrey;
}
.range{
    width: 200px;
    margin: auto 10px;
    text-align: center;
    position: relative;
}
h1{
    color: #8a7474;
    border-bottom: 1px solid #8a7474;
}
</style>