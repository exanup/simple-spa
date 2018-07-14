import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const message = 'Hello, World!'

ReactDOM.render(<h1>{message}</h1>, document.getElementById('root'))
registerServiceWorker()
