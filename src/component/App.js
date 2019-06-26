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
    }

    render() {
      return (
        <div>
          {this.props.children}
        </div>
      )
    };
}

export default App;