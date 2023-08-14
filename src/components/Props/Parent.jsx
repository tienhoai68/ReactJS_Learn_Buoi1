import React, { Component } from 'react'
import Child from './Child'
import Children from './Children';

export default class Parent extends Component {
    carList = [
        {
            tenSP: "BLACK",
            imageUrl: "./products/black-car.jpg"
        },
        {
            tenSP: "RED",
            imageUrl: "./products/red-car.jpg"
        },
        {
            tenSP: "STEEL",
            imageUrl: "./products/steel-car.jpg"
        },
        {
            tenSP: "Silver",
            imageUrl: "./products/silver-car.jpg"
        }
    ];
    state = {
        imageUrl: "./products/black-car.jpg"
    }
    changeImage = (image) => {
        this.setState({
            imageUrl: image,
    })
    }
    renderCarList = () => {
       return this.carList.map((element, index) => {
           return <Child key={index} 
           showName={this.showName} changeImage={this.changeImage} 
            element = {element}
          />
        //   tenSP = {element.tenSP} imageUrl = {element.imageUrl}
        })
    }
    showName = (name) => {
        alert (`đây là xe màu ${name}`)
    }
    render() {
        return (
            <div className='d-flex row'>
                {this.renderCarList()}
                <Children>
                    <h3>Hello cybersoft</h3>
                    <p>bootcamp51</p>
                </Children>
                <img src={this.state.imageUrl} width={500} alt="" />
            </div>
        )
    }
}
