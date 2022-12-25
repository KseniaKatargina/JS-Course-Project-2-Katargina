<template>
    <div class="select">
        <p
            class="title"
            @click="isOptionVisible = !isOptionVisible"
        >{{selected}}</p>
        <div
            class="options"
        v-if="isOptionVisible">
            <p class="option"
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option)">
                {{option.name}}
            </p>
        </div>
    </div>

</template>

<script>
export default {
    name: "v-select",
    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        },
        selected: {
            type: String,
            default() {
                return ''
            }
        }
    },
    data() {
        return {
            isOptionVisible: false
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('selectOption', option)
            this.isOptionVisible = false
        },
    }
}
</script>


<style scoped>
.title{
    border: solid 1px lightgrey;
}
.select{
    position: relative;
    width: 200px;
    cursor: pointer;
    margin-bottom: 20px;
}
p{
    margin: 0;
}
.options{
    border: solid 1px lightgrey;
    position: absolute;
    top:30px;
    right: 0;
    width: 100%;
}
.options p:hover{
    background: #e7dee0;
}
.option {
    background: whitesmoke;
}
</style>