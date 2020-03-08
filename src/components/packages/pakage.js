import React, { Component } from 'react'
import './package.css'

export default class pakage extends Component {
  state = {
    list: this.props.list
  }
  render () {
    return (
      <>
        <div className='package'>
          <h5>{this.props.title}</h5>
          <h2>{this.props.price}</h2>
          <p>{this.props.period}</p>
          <ul>
            {Object.keys(this.state.list).map(i => (
              <li>{this.state.list[i]}</li>
            ))}
          </ul>
          <button className='btn-cyan btn-sm'>Select Plan</button>
        </div>
      </>
    )
  }
}
