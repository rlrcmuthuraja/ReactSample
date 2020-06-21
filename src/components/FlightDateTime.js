import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

export class FlightDateTime extends Component {
  state = {
    date: new Date(),
  }   
  
  onChange(value){
    console.log(value);
  }
  

  render() {    
   
    return(      
      <div>
        <b>Flight Date and Time</b>
        <DateTimePicker         
          onChange={this.onChange('changed')}
          value={new Date()}
        />
      </div>
    
    )
  }

}