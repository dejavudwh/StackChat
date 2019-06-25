import React from 'react'
import LeftNav from './LeftNav.js';
import SocialBar from './SocialBar.js';
import ChatBar from './ChatBar.js';
import Sidebar from './Sidebar.js';
import InfoTable from './InfoTable.js';
import AddressBook from './AddressBook.js';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        LeftSidebar: 'recent',
        RightSidebar: 'share',
      };
      this.componentMap = {
        'recent' : <SocialBar />,
        'information' : <InfoTable /> ,
        'address' : <AddressBook />,
      };
      this.changeLeftSidebar = this.changeLeftSidebar.bind(this);
      this.changeRightSidebar = this.changeRightSidebar.bind(this);
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
          <LeftNav onChangeLeft={this.changeLeftSidebar} onChangeRight={this.changeRightSidebar}/>
          {this.componentMap[this.state.LeftSidebar]}
          <ChatBar />
          <Sidebar species={this.state.RightSidebar}/>
        </div>
      )
    };
}

export default App;