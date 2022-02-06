const redux = require('redux');

const initState = {
    counter: 0
};

// reducer
const rootReducer = (state = initState, action) => {
    console.log(`dispatching ${action.type}`);
    return state;
}

// store
const store = redux.createStore(rootReducer);
console.log(store.getState());

// subscription
store.subscribe(() => {
    console.log('Subscription called');
})


// dispatch
store.dispatch({type: 'TEST'});