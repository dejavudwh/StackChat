import React from 'react'
import LeftNav from './LeftNav'
import SocialBar from './SocialBar'
import ChatBar from './ChatBar'
import Sidebar from './Sidebar'
import InfoTable from './InfoTable'
import AddressBook from './AddressBook'

const { ipcRenderer } = require('electron')

class MainPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      LeftSidebar: 'recent',
      RightSidebar: 'share',
    }
    this.componentMap = {
      recent: <SocialBar />,
      information: <InfoTable />,
      address: <AddressBook />,
    }
    this.changeLeftSidebar = this.changeLeftSidebar.bind(this)
    this.changeRightSidebar = this.changeRightSidebar.bind(this)
  }

  componentDidMount() {
    this.props.openSocket()

    ipcRenderer.on('close_socket', () => {
      const email = this.props.useremail
      this.props.socket.emit('will_close', email)
    })
  }

  changeLeftSidebar(event) {
    const t = event.target.id === '' ? this.state.LeftSidebar : event.target.id
    this.setState({
      LeftSidebar: t,
    })
  }

  changeRightSidebar(event) {
    const t = event.target.id === '' ? this.state.RightSidebar : event.target.id
    this.setState({
      RightSidebar: t,
    })
  }

  render() {
    return (
      <div>
        <LeftNav onChangeLeft={this.changeLeftSidebar} onChangeRight={this.changeRightSidebar} />
        {this.componentMap[this.state.LeftSidebar]}
        <ChatBar />
        <Sidebar species={this.state.RightSidebar} />
      </div>
    )
  }
}

export default MainPanel
