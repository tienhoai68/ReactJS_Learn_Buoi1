import React, { Component } from 'react'

export default class State extends Component {
    state = {
        isShowMessage : true,
    }
    //state kà 1 thuộc tính mặc định của react

    handleHiddenMessage = () => {
        // this.state.isShowMessage
        // không thay đổi giá trị trực tiếp của state mà phải dùng hàm setState
        console.log(this.state.isShowMessage);
        this.setState({
            isShowMessage : false,
        }, () => {
            console.log(this.state.isShowMessage);
        })
        console.log(this.state.isShowMessage);
    }
    handleShowMessage = () => {
        this.setState({
            isShowMessage: true,
        })
    }
  render() {
    return (
      <div>
        <button onClick={() => this.handleHiddenMessage()} className="btn btn-primary">
            Hidden
        </button>
        <button onClick={() => this.handleShowMessage()} className="btn btn-success">
            Show
        </button>
        {this.state.isShowMessage && <p>BootCamp 51 </p>}
      </div>
    )
  }
}
