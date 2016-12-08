import React, { Component } from 'react';
import logo from './logo.svg';
import api from './Api.js';
import jpg from './copter.jpg';
import './App.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <h5 className="home-description">This is the greatest drone to hit the market. Use it for everything you can think of. If you can think it, the Air Monster 2.0 can do it.</h5>
        <img className="main-pic"src={jpg}/>
      </div>
    )
  }
}
