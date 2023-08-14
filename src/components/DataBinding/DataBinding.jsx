import React, { Component } from 'react'

export default class DataBinding extends Component {
    property = "Cao Thang" // thuộc tính 

    renderPrice() {
        return 3000;
    }
    renderElement() {
        return <button className="btn btn-success">Đăng Nhập</button> 
        //  <p>{this.renderElement()}</p> : gọi hàm 
    }
    render() {
        const variable = "Cybersoft"; // biến
        return <div>
            <h3>DataBinding</h3>
            <p>Variable: {variable}</p>
            <p>Property: {this.property}</p>
            <p> Price: {this.renderPrice()}</p>
            <p>Element{this.renderElement()}</p>
        </div>

    }
}
