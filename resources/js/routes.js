import Homedev from './components/Homedev';
import Home from './StockTrader/components/Home.vue';
import Portfolio from './StockTrader/components/portfolio/Portfolio.vue';
import Stocks from './StockTrader/components/stocks/Stocks.vue';

export const routes = [
    {path: '/', component: Homedev},
    {path: '/stocktrader', component: Home},
    {path: '/stocktrader/portfolio', component: Portfolio},
    {path: '/stocktrader/stocks', component: Stocks}

];