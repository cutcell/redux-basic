import { nanoid } from "nanoid";
import * as actionTypes from './actions';

const initState = {
    counter: 0,
    results: []
};

const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + payload
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - payload
            };
        case actionTypes.SAVE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: nanoid(4), value: state.counter })
            };
        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter(e => e.id !== payload)
            }
        default:
            return state;
    }
};

export default reducer;