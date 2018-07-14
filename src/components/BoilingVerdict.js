import React, { Component } from 'react'

export default class BoilingVerdict extends Component {
  render () {
    const temperature = this.props.temperature
    const verdict = temperature >= 100 ? `boil` : `not boil`
    const msg = `The water would ${verdict}.`

    return <div>{msg}</div>
  }
}
