import React, { Component } from 'react';
import logo from './logo.svg';
import api from './Api.js';
import './App.css';

export default class Home extends Component {
  render() {
    return (
      <div>
      <p className="home-description">This web application was created for The Iron Yard's Front-End Enginerring Class. The Purpose of this project was to practice
      utilizing React.js's router.</p>
      </div>
    )
  }
}
