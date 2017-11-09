import React, { Component } from 'react';
import './App.css';
import ToggleBox from '../../components/toggleBox/toggleBox';

class App extends Component {

  componentDidMount() {
    this.props.getTogglesList();
  }

  render() {
    return (
      <div className="App">
        <ToggleBox className="mask" {...this.props}/>
      </div>
    );
  }
}

export default App;
