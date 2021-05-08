import reducer from "./reducers";

function createStore(reducer) {
    let state;
    let listeners = [];

    function subscribe(listener) {
        listeners.push(listener);
        console.log(listeners);

    }

    function getState() {
        return state;
    }

    function dispatch(action) {
        // call the reducer
        state = reducer(state, action);

        for (let i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());