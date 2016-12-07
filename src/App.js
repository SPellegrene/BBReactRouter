import React, { Component } from 'react';
import api from './Api';
import { Link } from 'react-router';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ul className="page-links">
            <li className="list-items"><Link to='/'>Home</Link></li>
            <li className="list-items"><Link to='/About'>About</Link></li>
            <li className="list-items"><Link to='/Stores'>Stores</Link></li>
          </ul>
        </div>
        {this.props.children}
    </div>

    );
  }
}
