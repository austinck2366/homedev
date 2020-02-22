<template>
    <div>
        <Header/>
        <app-stock v-for="(stock) in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
import Header from "../Header.vue";
import stock from "./stock.vue";
import { mapGetters , mapActions } from "vuex";

export default {
        name: "Stocks",
        components: {
            Header,
            appStock: stock
        },

        data () {
            return {
                stocks: [
                    { id: 1, name: 'BMW', price: 110 },
                    { id: 2, name: 'Google', price: 200 },
                    { id: 3, name: 'Apple', price: 80 },
                    { id: 4, name: 'Twitter', price: 8 }
                ]
            }
        },
        methods: {
            ...mapActions(['fetchmsftStock', 'fetchtslaStock']),
        },
        created() {
            this.fetchmsftStock();
            this.fetchtslaStock();
        }

    }

</script>
<style>
    body{
        padding: 30px;
    }
</style>