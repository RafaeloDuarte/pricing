import { createStore } from 'redux';
import market from './reducers/priceindex/price_index_reducer'

const store = createStore(market);

export default store;