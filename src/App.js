import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      targetDate: 'June 9, 2018',
      message: 'To join Scalable Press!'
    }
  }

 componentWillMount(){
   this.getTime(this.state.targetDate);
 }

 componentDidMount(){
   setInterval(()=> this.getTime(this.state.targetDate), 1000);
 }

 formatNumber(value){
   return value < 10 ? '0' + value : value;
 }

  getTime(targetDate){
    const time = Date.parse(targetDate) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor((time/(1000*60*60)) % 24);
    const days = Math.floor(time/(1000*60*60*24));
    this.setState({days, hours, minutes, seconds});
  }

  render() {
    const Box = (props) =>{
      return(
        <div className="App-boxStyle">
          <div className="App-numberStyle">{props.number}</div>
          <div className="App-textStyle">{props.type}</div>
        </div>
      );
    }
    return (
      <div className="App">
        <div className="App-container">
          <Box number={this.formatNumber(this.state.days)} type={"days"}/>
          <Box number={this.formatNumber(this.state.hours)} type={"hours"}/>
          <Box number={this.formatNumber(this.state.minutes)} type={"minutes"}/>
          <Box number={this.formatNumber(this.state.seconds)} type={"seconds"}/>
        </div>
        <div className="App-textMessageStyle">
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default App;
