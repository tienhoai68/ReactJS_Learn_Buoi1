import React, { Component } from 'react'

export default class BaiTapStyling extends Component {
    state = {
        fontSize: 20,
    }
    changeFontSize = (number) => {
        this.setState({
            fontSize: this.state.fontSize + number,
        })
    }
    // deCreaseFontSize = () => {
    //     this.setState({
    //         fontSize: this.state.fontSize - 10,
    //     })
    // }
    // enCreaseFontSize = () => {
    //     this.setState({
    //         fontSize: this.state.fontSize + 10,
    //     })
    // }
    render() {
        return (
            <div>
                <button onClick={() => this.changeFontSize(-10)} className="btn btn-danger">Decrease</button>
                <button onClick={() => this.changeFontSize(10)} className="btn btn-success">Increase</button>
                <p style={{ fontSize: this.state.fontSize }}>Bootcamp 51 Q1</p>
            </div>
        )
    }
}
