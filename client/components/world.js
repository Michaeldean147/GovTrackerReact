import React from 'react';
import zipCodeHelper from '../helpers/zipCodeHelper';

export default class World extends React.Component {

  constructor (props) {
   super(props);
   this._handleClick = this._handleClick.bind(this);
 }

  _handleClick () {
    console.log('some stuff');
    zipCodeHelper('85053');
  };

  render () {
    return (
      <div onClick={this._handleClick}>
        <h1>World</h1>
      </div>
    )
  }
}
