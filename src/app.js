import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};

    }

    componentWillMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clear(this.interval);
    }

    tick() {
        this.setState({
            counter: this.state.counter + this.props.increment
        });
    }

    render() {
        return (
            <h1 className="aihao" style={{ color: this.props.color }}>
                Counter ({this.props.increment}): {this.state.counter}
            </h1>
        );
    }
}

export class App extends Component {
    render() {
        return (
            <div>
                <Counter increment={10} color={NICE}/>
                <Counter increment={5} color={SUPER_NICE}/>
            </div>
        );
    }
}