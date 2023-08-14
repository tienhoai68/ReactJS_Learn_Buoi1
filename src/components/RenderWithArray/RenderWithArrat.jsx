import React, { Component } from 'react'

export default class RenderWithArrat extends Component {
    studentList = [
        {
            id: 1,
            name: "Bình Thạnh"
        },
        {
            id: 2,
            name: "Cao Thắng"
        },{
            id: 3,
            name: "Quận 1"
        }
    ];
    renderStudentList = () => {
        // render bằng hàm map
        const content = this.studentList.map((element, index) => {
            return <p key={index}>{element.name}</p>;
        })
        return content;
    }
  render() {
    return (
      <div>
        {this.renderStudentList()}
      </div>
    )
  }
}
