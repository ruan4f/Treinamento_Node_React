import React, { Component } from 'react'

class Child extends Component {

    // No re-render, please!
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.name !== this.props.name
    }

    render() {
        console.log('rendered')
        return <React.Fragment>{this.props.name}</React.Fragment>
    }
}

export default Child;
