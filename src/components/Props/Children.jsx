import React, { Component } from 'react'

export default class Children extends Component {
  render() {
    return (
      <div>
        <h1>Children Demo:</h1>
        {this.props.children}
      </div>
    )
  }
}
