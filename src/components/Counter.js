import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { increment , decrement, reset, incrementby } from '../actions'
class Counter extends PureComponent
{
    constructor(props)
    {
        super(props);
        this.state = {value: 0};
    }
    handleChange = (e) => {
        this.setState({ value: parseInt(e.target.value) });
      };

    render()
    {
        return(
            <div>
                <h1>COUNTER</h1>
                <h2>{this.props.count}</h2>
                <button onClick={this.props.handleIncrease}> + </button>
                <button onClick={this.props.handleDecrease}> - </button>
                <button onClick={this.props.reset}> RESET </button>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={() =>this.props.incrementby(this.state.value)}> Increment By </button>
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

function mapDispatchToProps(dispatch,props)
{
    return bindActionCreators(
        {
            handleIncrease: increment,
            handleDecrease: decrement,
            reset: reset,
            incrementby: incrementby,
        },dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);