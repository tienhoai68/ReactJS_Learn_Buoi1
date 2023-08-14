import React, { Component } from 'react'
import Header from './Header';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';

export default class Baitaplayout1 extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-12 bg-warning'>
        <Header/>
        </div>
        <div className='col-4 bg-primary'>
        <Navigation/>
        </div>
        <div className='col-8 bg-success'>
        <Content/>
        </div>
        <div className='col-12 bg-danger'>
        <Footer/>
        </div>
      </div>
    )
  }
}
