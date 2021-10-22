import React from "react";

class Time extends React.Component {
    constructor(props) {
        super()
        this.state = {
            time : new Date().toLocaleTimeString()
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
}
    render() {
        return (
            <h3>{this.state.time}</h3>
        )
    }
}

export default Time;