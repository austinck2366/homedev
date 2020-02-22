import Vue from "vue";
import Vuex from "vuex";

import stocks from './modules/stocks';
import msftStock from './modules/msftStock';
import tslaStock from './modules/tslaStock';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        msftStock,
        tslaStock
    }
});