import React, { Component, Fragment } from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureUnit from './TemperatureUnit'

import { convertUnit, toCelsius, toFahrenheit } from '../utils/unitConversion'

const scales = { CELSIUS: 0, FAHRENHEIT: 1 }

export default class Calculator extends Component {
  constructor () {
    super()
    this.state = { temperature: '', scale: scales.CELSIUS }

    this.handleTemperatureUpdate = this.handleTemperatureUpdate.bind(this)
  }

  handleTemperatureUpdate (temperature, scale) {
    this.setState({ temperature, scale })
  }

  render () {
    const temperature = this.state.temperature
    const scale = this.state.scale

    const celsius =
      scale === scales.CELSIUS
        ? temperature
        : convertUnit(temperature, toCelsius)

    const fahrenheit =
      scale === scales.FAHRENHEIT
        ? temperature
        : convertUnit(temperature, toFahrenheit)

    return (
      <Fragment>
        <TemperatureUnit
          temperature={celsius}
          scale={scales.CELSIUS}
          onUpdateTemperature={this.handleTemperatureUpdate}
        />
        <TemperatureUnit
          temperature={fahrenheit}
          scale={scales.FAHRENHEIT}
          onUpdateTemperature={this.handleTemperatureUpdate}
        />
        <BoilingVerdict temperature={temperature} />
      </Fragment>
    )
  }
}
