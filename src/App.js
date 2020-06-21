import React, { Component } from 'react';
import './App.css';
import { AirlineDropdown } from './components/AirlineDropdown';
import { FlightDateTime } from './components/FlightDateTime';
import { FlightInterruptionType } from './components/FlightInterruptionType';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Cloud Insurance</h1>
        </header>
       
<AirlineDropdown/>
<FlightDateTime/>
<FlightInterruptionType/>
        
      </div>
    );
  }
}



export default App;
