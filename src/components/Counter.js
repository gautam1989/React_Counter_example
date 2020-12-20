import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { increment , decrement, reset } from '../actions'
class Counter extends PureComponent
{
    render()
    {
        return(
            <div>
                <h1>COUNTER</h1>
                <h2>{this.props.count}</h2>
                <button onClick={this.props.handleIncrease}> + </button>
                <button onClick={this.props.handleDecrease}> - </button>
                <button onClick={this.props.reset}> RESET </button>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return {
        count : state.counter.count,
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators(
        {
            handleIncrease: increment,
            handleDecrease: decrement,
            reset: reset,
        },dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);