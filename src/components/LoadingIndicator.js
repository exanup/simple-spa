import React, { Component } from 'react'

import './LoadingIndicator.css'

export default class LoadingIndicator extends Component {
  render () {
    return (
      <div className="section has-text-centered">
        <div className="spinner" />
      </div>
    )
  }
}
