import React from 'react'

class App extends React.Component {
  componentDidMount() {
    // const socket = io('http://localhost:8008')
    // socket.on('add_friend_event', (data) => {
    //   console.log(data)
    // })
    this.props.openSocket()
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
