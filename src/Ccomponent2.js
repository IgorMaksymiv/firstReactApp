import React, { Component } from 'react'

export default class Ccomponent2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            items: []
        }

        this.handelChange = this.handelChange.bind(this);
        this.hundleSubmit = this.hundleSubmit.bind(this);

    };

    handelChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    hundleSubmit(event) {
        event.preventDefault();
        this.setState({
            input: this.state.input,
            items: [...this.state.items, this.state.input]
        });
    }

    render() {

        return (
            <div>
                <h3 style={{ color: 'green', textAlign: 'center', fontSize: '54px' }}>Hello world</h3>
                <form onSubmit={this.hundleSubmit}>
                    <input value={this.state.input} onChange={this.handelChange} />
                    <button type='submit'>Submit</button>
                </form>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div >
        )
    }
}
