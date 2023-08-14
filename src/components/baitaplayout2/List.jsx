import React, { Component } from 'react'
import Item1 from './Item1'

export default class List extends Component {
    render() {
        return (
            <section className="pt-4">
                <div className="container px-lg-5">
                    {/* Page Features*/}
                    <div className="row gx-lg-5">
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <Item1 />
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <Item1 />
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <Item1 />
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <Item1 />
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <Item1 />
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <Item1 />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
