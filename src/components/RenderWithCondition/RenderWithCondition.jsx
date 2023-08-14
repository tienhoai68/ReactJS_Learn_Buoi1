import { Button } from 'bootstrap';
import React, { Component } from 'react'

export default class RenderWithCondition extends Component {
    isRegister = true;

    renderButton() {
        if (this.isRegister) {
            return <p>Đã Đăng kí</p>
        }
        return <p>Chừa Đăng kí</p>

    }
  render() {
    return (
        <div>
            <h3>RenderWithCondition1</h3>
            <div>{this.isRegister ? <p>Đã đăng kí</p> : <p>Đã đăng kí</p>}</div>
            {this.isRegister && <button className='btn btn-success'> Đăng Nhập</button>}
            {this.renderButton()}
        </div>
    );
  }
}
