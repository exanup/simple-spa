export let convertUnit = (value, callback) => callback(value)
export let toCelsius = (f) => (f - 32) / 1.8
export let toFahrenheit = (c) => c * 1.8 + 32
