import React, { Component } from 'react'
import data from "../../Data/data.json"
import GiayChild from './GiayChild'
export default class BaiTapGiay extends Component {
    showDescription = (description) => {
        alert(`đây là ${description}`)
    }
    renderShoes = () => {
      return  data.map((element, index) => {
            return <GiayChild showDescription= {this.showDescription}  key={index} element = {element}/>
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                   {this.renderShoes()}
                </div>
            </div>
        )
    }
}
