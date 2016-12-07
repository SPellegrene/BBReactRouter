import React, { Component } from 'react';
import logo from './logo.svg';
import api from './Api.js';
import axios from 'axios';
import './Stores.css';

export default class Stores extends Component {
  constructor(props){
    super(props);
    this.state={
      stores:[]
    }
  }
  componentDidMount() {
    this.getProducts()
  }

  getProducts(){
    axios.get(api() + '/stores').then((response)=> {
      let stores = response.data.data.slice(0);
      this.setState({
        stores
      })
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <ul>
        {this.state.stores.map((store, index) => {
          console.log(store);
          return (
            <li key={store.id}>{store.name}
              <span className="address">{store.address}</span>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}
