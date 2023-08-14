import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleRegister() {
        alert("Đã đăng kí thành công")
    }
    handleLogout(name) {
        alert(`${name} Đã đăng xuất`)
    }
    render() {
        return (
            <div>
                {/* Event ko có tham số */}
                <button onClick={() => {
                    console.log("Đã Đăng Nhập");
                }} className="btn btn-success ml-1">Login</button>

                <button onClick={this.handleRegister} className="btn btn-success ml-1">
                    Register
                </button>
                {/* Event có tham số */}

                {/* cách thứ nhất */}
                <button onClick={this.handleLogout.bind(this, "Hello")} className="btn btn-danger ml-1">Logout1</button>
                {/* cách thứ hai sử dụng cách này */}
                <button onClick={() => { this.handleLogout("Cybersoft") }} className="btn btn-danger ml-1">Logout2</button>
            </div>
        )
    }
}
