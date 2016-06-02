import React from 'react';
import { NICE, SUPER_NICE } from './colors';


class Counter extends React.Component {
    static propTypes = {
        increment: React.PropTypes.number,
        color: React.PropTypes.oneOf(['pink', 'black'])
    };

    static defaultProps = {
        color: 'black'
    };

    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.handleTick = this.handleTick.bind(this);
    }

    componentWillMount() {
        this.handleTick();
        this.interval = setInterval(this.handleTick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleTick() {
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

export class App extends React.Component {
    render() {
        return (
            <div>
                <Counter increment={10} color={NICE}/>
                <Counter increment={5} color={SUPER_NICE}/>
            </div>
        );
    }
}