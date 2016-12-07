import React, { Component } from 'react';
import logo from './logo.svg';
import api from './Api.js';
import './App.css';

export default class About extends Component {
  render() {
    return (
      <div>
      <p className="home-description">This App is for the sole purpose of finding Best Buy stores and their exact locations using the Google Maps plug-in.</p>
      </div>
    )
  }
}
