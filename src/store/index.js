import { createStore, combineReducers } from 'redux'
import itemsReducer from './item/reducer';
import amountReducer from './amount/reducer';
import counterReducer from './counter/reducer';
const reducers = combineReducers({
    itemsReducer,
    amountReducer,
    counterReducer 
});


const store = createStore( 
    reducers,
    /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
// const store = createStore( reducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ );

export default store;
