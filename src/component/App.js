import React from 'react';
import './App.css'
import LeftNav from './LeftNav.js';
import SocialBar from './SocialBar.js';
import ChatBar from './ChatBar.js';
import Sidebar from './Sidebar.js';

class App extends React.Component {
    constructor() {
      super();
    }

    render() {
      return(
        <div className="AppContainer">
          <LeftNav />
          <SocialBar />
          <ChatBar />
          <Sidebar />
        </div>
      );
    };
}

export default App;