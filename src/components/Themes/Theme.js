import React, { Component } from 'react'
import './Theme.css'

export default class Theme extends Component {
  state = {
    customTag: this.props.icon
  }
  render () {
    return (
      <>
        <div className='theme'>
          <div className='icons'>
            <this.state.customTag />
            <button className='btn-md btn-cyan'>{this.props.btnText}</button>
          </div>
          <div className='content-body'>{this.props.content}</div>
        </div>
      </>
    )
  }
}
