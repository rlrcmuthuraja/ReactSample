import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export class AirlineDropdown extends Component {

  render() {
    const options = [      
      'Scandinavian Airlines', 'British Airways', 'Lufthansa', 'KLM', 'Air France'
    ];
    const defaultOption = options[0];
    return(
      <div>
     <b>Airlines</b> <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
     </div>
      
    )
  }

}