import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 }
  }

  onInc() {
    this.setState({
      value: this.state.value + 1
    })
  }

  onDec() {
    this.setState({
      value: this.state.value - 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onInc.bind(this)}>+</button>
        <p>{this.state.value}</p>
        <button onClick={this.onDec.bind(this)}>-</button>
      </div>
    )
  }
}

export default Counter
