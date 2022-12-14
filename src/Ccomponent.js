import React, { Component } from 'react'

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decremnt = this.decremnt.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    decremnt() {
        this.setState(state => ({
            count: state.count - 1
        }));
    }

    reset() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decremnt}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
                <h1>Current: {this.state.count}</h1>
            </div>
        )
    }
}