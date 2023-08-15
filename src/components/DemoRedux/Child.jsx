import React, { Component } from 'react'
import {connect} from "react-redux"
class Child extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={() => this.props.increase()} className="btn btn-primary">Increase</button>
        <button onClick={() => this.props.decrease()} className="btn btn-success">Decrease</button>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => {
      // console.log("INCREASE");
      const action = {
        type: "INCREASE",
      };
      dispatch(action);
    },
    decrease: () => {
      // console.log("DECREASE");
      const action = {
        type: "DECREASE",
      };
      dispatch(action);
    },
  };
};


export default connect(null, mapDispatchToProps)(Child);
