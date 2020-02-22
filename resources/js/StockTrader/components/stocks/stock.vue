<template>
<v-container class="col-sm-2 col-md-3">
    <v-card
    outlined
    tile
    >
        <v-card-title>{{stock.name}}</v-card-title>
        <v-card-text>Price :${{stock.price}}</v-card-text>
    <div class="pull-left">
        <!-- Form control class is adding extra box below input -->
        <v-text-field label="Enter Quantity" hide-details="auto" v-model='quantity'></v-text-field>
        <v-spacer></v-spacer>
        <v-input
         placeholder="Quantity"></v-input>
    </div>

    <div class="pull-right">
            <v-btn 
            color="success"
            align="left"
            @click="buyStock"
            :disabled="quantity <=0 || Number.isInteger(quantity)"
            >Buy</v-btn>
            <v-btn 
            dark
            color="red"
            >Sell</v-btn>
    </div>

    </v-card>

</v-container>
</template>

<script>
import Header from "../Header.vue";
export default {
        name: "stock",
        components: {
            Header
        },
        props: ['stock'],

        data () {
            return {
                quantity: null

        }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }; 
                console.log(order);
                this.quantity = 0;
            }
        }
    }
</script>
<style>
    body{
        padding: 30px;
    }
</style>