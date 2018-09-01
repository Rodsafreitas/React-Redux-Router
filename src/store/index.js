import {createStore, combineReducers} from 'redux';
import HistoryReducerCoin from '../reducers/HistoryReducerCoin';

const store = createStore(combineReducers({
    HistoryReducerCoin
}));

export default store;