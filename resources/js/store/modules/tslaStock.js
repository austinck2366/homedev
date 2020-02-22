//const APIkey = CLY564ACLSUJCCZF;
const state = {
    stockData: [],
    stockSymbol: ''
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        console.log(stocks);
        state.stockSymbol = stocks['Meta Data']['2. Symbol'];
        state.stockData = stocks["Time Series (Daily)"];
    },
    'RND_STOCKS' (state) {

    }    
};

const actions = {
    async fetchtslaStock ({commit}) {
        const response = await axios
        .get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=CLY564ACLSUJCCZF');

    commit('SET_STOCKS', response.data)
    }
};

const getters = {
    stock: state => {
        return state.stockData;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
} 