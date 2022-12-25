<template>
    <div class="form">
        <div class="info">
            <label>
                Фамилия :
                <input
                    v-model="user.lastName"
                    minlength="2"
                    maxlength="30"
                    required
                    placeholder="Введите Фамилию"
                >
            </label>
            <label>
                Имя :
                <input
                    required
                    minlength="2"
                    maxlength="30"
                    v-model="user.firstName"
                    placeholder="Введите Имя"
                >
            </label>
            <label>
                Телефон :
                <input
                    maxlength="11"
                    minlength="11"
                    required
                    placeholder="Например: 89999999999"
                    v-model="user.phone">
            </label>
            <label>
                Город :
                <input
                    v-model="user.city"
                    required
                    minlength="3"
                    maxlength="30"
                    placeholder="Введите город"
                >
            </label>
            <label>
                Улица :
                <input
                    v-model="user.street"
                    required
                    minlength="2"
                    maxlength="30"
                    placeholder="Введите Улицу"
                >
            </label>
            <label>
                Дом :
                <input
                    v-model="user.houseNumber"
                required
                minlength="1"
                maxlength="6"
                placeholder="Введите дом">
            </label>
            <label>
                Квартира :
                <input
                    v-model="user.flatNumber"
                    minlength="1"
                    maxlength="5"
                    placeholder="Введите квартиру"
                >
            </label>
            <label>
                Почта :
                <input
                    v-model="user.email"
                    type="email"
                    minlength="10"
                    maxlength="50"
                    required
                    placeholder="Введите почту"
                >
            </label>
        </div>
        <router-link :to="{name: 'catalog',params:{user:IS_USER_EXIST}}">
            <button
                @click="save">
                Сохранить данные
            </button>
        </router-link>
        <div class="exit">
            <router-link :to="{name: 'catalog'}">
                <button>
                    В каталог
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: "v-login",
    data() {
        return {
            user: [{
                lastName: '',
                firstName: '',
                phone: '',
                city: '',
                street: '',
                house: '',
                houseNumber: '',
                flatNumber: '',
                email: ''
            }]
        }
    },
    computed: {
        ...mapGetters([
            'IS_USER_EXIST'
        ])
    },
    methods: {
        ...mapActions([
            'SET_USER'
        ]),
        save(){
            this.SET_USER(this.user);
        }
    }

}
</script>

<style scoped>
.form{
    border-radius: 2px;
    border: 2px solid darkgrey;
    box-shadow: 0 0 8px 0 lightgrey;
    background-color: beige;
}
.info{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
}
label{
    margin: 10px;
}
input{
    margin: 10px;
    border: 3px solid #a97f7f;
    border-radius: 5px;
    box-shadow: 0 0 8px 0 lightgrey;
}
button{
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 2px;
    border-color: #a97f7f;
    box-shadow: 0 0 10px 0 #8a7474;
    color: black;
}
button:hover{
    background-color: #be8686;
    color: black;
    cursor: pointer;
}
input:hover{
    cursor: pointer;
}

</style>