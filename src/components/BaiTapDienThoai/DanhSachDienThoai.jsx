import React, { Component } from 'react'
import PhoneItem from './PhoneItem'

export default class DanhSachDienThoai extends Component {
    renderPhoneList = () => {
      return  this.props.data.map((element, index) => {
            return (
                <div key={index} className="col-4">
                    <PhoneItem addToCart={this.props.addToCart} getPhoneDetails ={this.props.getPhoneDetails} element= {element} />
                </div>
            );
        });
    };
    render() {
        return (
            <div>
                <div className="row mt-3">
                    {this.renderPhoneList()}
                </div>
            </div>
        )
    }
}
