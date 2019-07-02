import React from 'react'
import io from 'socket.io-client'


class App extends React.Component {
  componentDidMount() {
    const socket = io('http://localhost:8008')
    socket.on('add_friend_event', (data) => {
      console.log(data)
    })
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
