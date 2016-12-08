import React, { Component } from 'react';
import logo from './logo.svg';
import api from './Api.js';
import jpg from './copter.jpg';
import './App.css';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
      <h2 className="home-description" style={{'font-family':'sans-serif'}}>The Air Monster 2.0</h2>
      <img className="main-pic"src={jpg}/>
      </div>
    )
  }
}
