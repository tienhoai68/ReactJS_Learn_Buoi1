import React, { Component } from 'react'
//Props: là cách chuyền dữ liệu từ component cha vào component con
// Muốn truyền từ con sang cha => truyền function
// prop: không thay đổi đổi dc, State: thay đổi được
export default class Child extends Component {

    render() {
        // console.log(this.props);
        return (
            <div>
                <div className="card">
                    <img className="card-img-top w-100 " src={this.props.element.imageUrl} alt="..." />
                    <div className="card-body text-center">
                        <h4 className="card-title">{this.props.element.tenSP}</h4>
                        <button onClick={() => this.props.showName(this.props.element.tenSP)} className="btn btn-primary">Show Name</button>
                        <button onClick={() => this.props.changeImage(this.props.element.imageUrl)} className=" btn btn-success">change image</button>
                    </div>
                </div>
            </div>
        )
    }
}
