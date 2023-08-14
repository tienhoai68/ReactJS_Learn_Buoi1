import React, { Component } from 'react'
import data from "../../Data/DataFilms.json"
export default class BaiTapFilm extends Component {
// render UI with map
    renderFilm = () => {
       return data.map((element, index) => {
           return <div key={index} className="col-2">
                    <div className="card">
                        <div>
                        <img className=" card-img-top" src= {element.hinhAnh} alt="..." />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{element.tenPhim}</h4>
                            <p style={{fontSize: 12,}} className="card-text">{element.moTa}</p>
                        </div>
                    </div>
                </div>
        })
    }

    render() {
        return (
            <div className='row'>
                {this.renderFilm()}
            </div>
        )
    }
}
