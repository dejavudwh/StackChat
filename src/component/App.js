import React from 'react'
import io from 'socket.io-client'


class App extends React.Component {
  componentDidMount() {
    // const socket = io('http://localhost:8008')
    // socket.emit('news', {
    //   sign: 'fuck connect',
    // })
    // socket.on('fu', (data) => {
    //   console.log(data)
    // })
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App
