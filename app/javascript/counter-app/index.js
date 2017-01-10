import ReactDOM from 'react-dom'
import React from 'react'
import Counter from './counter.jsx'

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<Counter name="Counter" />, document.body.appendChild(document.createElement('div')))
})
