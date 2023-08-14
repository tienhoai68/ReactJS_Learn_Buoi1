import React, { Component } from 'react'
export default class BaiTapChonXe extends Component {
    state = {
        imgUrl: "./products/black-car.jpg"
    }
    handleChangeCar = (color) => {
        this.setState({
            imgUrl:  `./products/${color}-car.jpg`
        })
    }
    // handleChangeCarBlack = () => {
    //     this.setState({
    //         imgUrl:  `./products/black-car.jpg`
    //     })
    // }
    // handleChangeCarSteel = () => {
    //     this.setState({
    //         imgUrl:  `./products/steel-car.jpg`
    //     })
    // }
    // handleChangeCarSilver = () => {
    //     this.setState({
    //         imgUrl:  `./products/silver-car.jpg`
    //     })
    // }
    // handleChangeCarRed = () => {
    //     this.setState({
    //         imgUrl:  `./products/red-car.jpg`
    //     })
    // }
    render() {
        return (
            <div className="row">
                <div className="col-8">
                    <img className="img-fluid" src={this.state.imgUrl} alt="" />
                </div>
                <div className="col-4">
                    <div className="border d-flex align-items-center p-4">
                        <button className='btn' onClick={() => this.handleChangeCar("black")}>
                            <img style={{width: 50}} className='img-fluid' src="./icons/icon-black.jpg" alt="" />
                        </button>
                            <p className='ml-5'style={{fontSize:50,}}>Black</p>
                    </div>
                    <div className="border d-flex align-items-center p-4">
                        <button className='btn' onClick={() => this.handleChangeCar("steel")}>
                            <img style={{width: 50}}  className='img-fluid' src="./icons/icon-steel.jpg" alt="" />
                        </button>
                            <p className='ml-5'style={{fontSize:50,}}>Steel</p>
                    </div>
                    <div className="border d-flex align-items-center p-4">
                        <button className='btn' onClick={() => this.handleChangeCar("silver")}>
                            <img style={{width: 50}}  className='img-fluid' src="./icons/icon-silver.jpg" alt="" />
                        </button>
                            <p className='ml-5'style={{fontSize:50,}}>Silver</p>
                    </div>
                    <div className="border d-flex align-items-center p-4">
                        <button  className='btn' onClick={() => this.handleChangeCar("red")}>
                            <img style={{width: 50}}  className='img-fluid' src="./icons/icon-red.jpg" alt="" />
                        </button>
                            <p className='ml-5'style={{fontSize:50,}}>Red</p>
                    </div>
                </div>

            </div>
        )
    }
}
