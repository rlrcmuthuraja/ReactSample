import React, { Component } from 'react';
export class FlightInterruptionType extends Component {

    setInterruptionType(event) {
        console.log(event.target.value);
      }

  render() {    
    return(
        <div onChange={this.setInterruptionType.bind(this)} required>
        <b>Flight Interruption Type</b>
        <input type="radio" value="cancellation" name="InterruptionType"/> Cancellation
        <input type="radio" value="delay" name="InterruptionType"/> Delay
      </div>
    )
  }

}