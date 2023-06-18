import { createStore, combineReducers } from 'redux';
import cartReducer from '../redux/reducers/cartReducer';
import orderReducer from '../redux/reducers/orderReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  order: orderReducer,
});

const store = createStore(rootReducer);

export default store;
