import React, { Component } from 'react';
import Fcomponent from './Fcomponent';
import { Button } from '@mui/material';


export default class Ccomponent3 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'learn React'
        }
    }

    render() {
        return (
            <div>
                <p>Hello Youtube {this.state.name}</p>
                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
                <Fcomponent nameweb={this.state.name} />
            </div>
        )
    }
}
