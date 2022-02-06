import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'

class Counter extends Component {
    render() {
        const resultList = this.props.results.map(({ id, value }) => (
            <li key={id} onClick={() => this.props.onDeleteResult(id)}>{value}</li>
        ));

        return (
            <div>
                <CounterOutput value={this.props.cnt} />
                <CounterControl label="Increment" clicked={this.props.onIncrementClick} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementClick} />
                <CounterControl label="Add 5" clicked={this.props.onAddClick} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractClick} />
                <hr />
                <button onClick={this.props.onSaveResult}>Save result</button>
                <ul>
                    {resultList}
                </ul>
            </div>
        );
    }
}

const mapState = state => {
    return {
        cnt: state.counter,
        results: state.results
    };
};

const mapDispatch = dispatch => {
    return {
        onIncrementClick: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementClick: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddClick: () => dispatch({ type: actionTypes.ADD, payload: 5 }),
        onSubtractClick: () => dispatch({ type: actionTypes.SUBTRACT, payload: 5 }),
        onSaveResult: () => dispatch({ type: actionTypes.SAVE_RESULT }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, payload: id })
    }
};

export default connect(mapState, mapDispatch)(Counter);