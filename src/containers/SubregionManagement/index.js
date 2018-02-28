import React from 'react'
import createReactClass from 'create-react-class'
import './index.css'
var ReactDOM = require("react-dom");

export default createReactClass({
  click: function () {
    
  },
  render: function () {
    return (
      <div>
        <div onClick={this.click} style={{backgroundColor: 'red', border: '1px solid black', height: 100, width: 100}}></div>
      </div>
    )
  }
})