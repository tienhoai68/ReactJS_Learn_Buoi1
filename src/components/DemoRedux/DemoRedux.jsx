import React, { Component } from 'react'
import Child from './Child';
import {connect} from "react-redux";

class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Count: {this.props.countRedux}</h3>
        <Child/>
      </div>
    );
  }
}
// lấy dữ liệu từ reducer về
const mapStateToProps = (state) => {
    return {
      countRedux: state.countReducer.count,
    };
};
// gửi dữ liệu từ component lên reducer
const mapDispatchToProps = (dispatch) => {
  return {};
};

const demoReduxComponent = connect(mapStateToProps, mapDispatchToProps)(DemoRedux);

export default demoReduxComponent;