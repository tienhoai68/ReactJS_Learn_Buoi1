import React, { Component } from 'react'
/**
 * 3 cách
 * 1. stylesheet
 * 2. module
 * 3. inline
 * 
 */
/**
 * 1.stylesheet
 * ưu điểm: dễ tiếp cận
 * nhược điểm: những file khác không import cũng sẽ ăn css
 *  */ 
import "./style.css"

/**
 * 2. module 
 * ưu điểm: giải quyết dc nhượt điểm stylesheet
 * Nhược điểm: Khó dùng
 */
/**
 * 3. inline 
 * ưu điểm:  dynamic giá trị của thuộc tính
 * nhược điểm không tái sử dụng dc
 */
import styleBC51 from "./style.module.css"

export default class Styling extends Component {
    fontSize = 40;
  render() {
    return (
      <div>
        <p className="cybersoft">
            StyleSheet
        </p>
        <p className={`${styleBC51.module} ${styleBC51.cybersoftFontWeight} ${styleBC51["cybersoft-51"]}`}>Module</p>
        <p style={{fontSize: this.fontSize, color: "red", backgroundColor: "green",}}>
            inline
        </p>
      </div>
    )
  }
}
