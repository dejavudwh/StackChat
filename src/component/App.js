import React from 'react';
import './App.css'
import LeftNav from './LeftNav.js';
import SocialBar from './SocialBar.js';

class App extends React.Component {
    constructor() {
      super();
    }

    render() {
      return(
        <div className="AppContainer">
          <LeftNav />
          <SocialBar />
        </div>
      );
    };
}

export default App;