<template>
    <div>
        <Header/>
        <Plotly :data="graphData" :layout="layout" :display-mode-bar="false"></Plotly>
    </div>
</template>

<script>
import Header from "../Header.vue";
import stock from "./stock.vue";
import { Plotly } from 'vue-plotly';
import { mapGetters , mapActions } from "vuex";


export default {
        name: "Stocks",
        components: {
            Header,
            appStock: stock
        },

        data () {
            return {
                graphData:[{
                    x: [1,2,3,4],
                    y: [10,15,13,17],
                    type:"scatter"
                    }],
                layout:{
                    title: "My graph"
            }
            }
        },
        methods: {
            ...mapActions(['fetchmsftStock', 'fetchtslaStock']),
        },
        computed: {
        console.log(this.$store.state.tslaStock.stockData);
        }


    }

</script>
<style>
    body{
        padding: 30px;
    }
</style>