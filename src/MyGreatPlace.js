import React, { Component } from 'react';
import gif from './loader1-copy.gif';
import './MyGreatPlace.css';
export default class MyGreatPlace extends Component {
  render() {
    return (
      <div>
      <img className="gif-loader" src={gif} alt='logo'/>
      </div>
    )
  }
}
