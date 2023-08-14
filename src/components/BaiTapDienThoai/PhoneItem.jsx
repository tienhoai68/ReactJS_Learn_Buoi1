import React, { Component } from 'react'

export default class PhoneItem extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <img
                        className="card-img-top"
                        alt="..." src={this.props.element.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.element.tenSP}</h4>
                        <button onClick={() => this.props.getPhoneDetails(this.props.element)} className="btn btn-success">XEM CHI TIẾT</button>
                        <button onClick={ () => this.props.addToCart(this.props.element)} className='btn btn-primary'>Thêm Giỏ Hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
