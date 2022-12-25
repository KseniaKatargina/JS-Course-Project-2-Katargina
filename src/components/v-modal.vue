<template>
    <div class="modalWrapper">
        <div class="modal">
            <div class="header">
            <span>
                {{modalTitle}}
            </span>
                <span class="close">
                <i class="material-icons"
                   @click="closeModal">close</i>
            </span>
            </div>
            <div class="content">
                <slot></slot>
            </div>
            <div class="footer">
                <button class="btnAddToCart"
                        @click="addToCart">{{btnTitle}}</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "v-modal",
    methods: {
        closeModal(){
            this.$emit('closeModal')
        },
        addToCart(){
            this.$emit('addToCart')
        }
    },
    props: {
        modalTitle:{
            type:String,
            default:''
        },
        btnTitle: {
            type:String,
            default:'ok'
        }
    },
}
</script>

<style scoped>
.modalWrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
}
.modal{
    padding: 16px;
    position: fixed;
    top:150px;
    background: white;
    width: 400px;
    box-shadow: 0 0 17px 0 #8a7474;
}
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
}
.content{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding-top: 10px;
    box-shadow: 0 0 17px 0 #e7dee0;
}
.footer{

}
.btnAddToCart{
    background-color: #e7dee0;
    border-radius: 2px;
    border-color: #d5c9c9;
    color: #130808;
    box-shadow: 0 0 8px 0 lightgrey;
}
.btnAddToCart:hover{
    background-color: #be8686;
    color: black;
    cursor: pointer;
}
.close:hover{
    cursor: pointer;
    color: #be8686;
}
</style>