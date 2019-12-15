import leadReducer from './reducers/leadReducer';
import countReducer from './reducers/countReducer'
import {
    combineReducers,
    createStore
} from 'redux';

let reducer = combineReducers({
    leads: leadReducer,
    count: countReducer
});

let store = createStore(reducer);

store.subscribe(() => {
    console.log("dispatched: ", store.getState());
})

function stateMapper(state) {
    return state;
}

export {
    store,
    stateMapper
};