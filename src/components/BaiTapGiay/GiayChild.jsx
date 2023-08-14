import React, { Component } from 'react'

export default class GiayChild extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="card">
                    <img className="card-img-top w-100" src={this.props.element.image} alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.element.name}</h4>
                        <button onClick={() => this.props.showDescription(this.props.element.description)} className='btn btn-dark'>Show Description</button>
                    </div>
                </div>
            </div>
        )
    }
}
