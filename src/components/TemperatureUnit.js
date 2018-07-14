import React, { Component } from 'react'

export default class TemperatureUnit extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    const temperature = isNaN(parseFloat(e.target.value))
      ? 0
      : parseFloat(e.target.value)

    const scale = this.props.scale
    this.props.onUpdateTemperature(temperature, scale)
  }

  render () {
    const temperature = this.props.temperature
    return (
      <input type="text" value={temperature} onChange={this.handleChange} />
    )
  }
}
