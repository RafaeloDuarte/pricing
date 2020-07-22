import { combineReducers } from 'redux'
import authReducer from './auth_reducer';
import market from './price_index_reducer'

const reducers = combineReducers({
    auth: authReducer,
    market: market
})

export default reducers