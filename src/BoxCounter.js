import React, { Component } from 'react';
import './App.css';

class BoxCounter extends Component {
  render (){
    return(
      <div className="App-boxStyle">
        <div className="App-numberStyle">{props.number}</div>
        <div className="App-textStyle">{props.type}</div>
      </div>
    );
  }

}

export default BoxCounter;
