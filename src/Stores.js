import React, { Component } from 'react';
import api from './Api.js';
import axios from 'axios';
import Store from './Store';
import { Link } from 'react-router';
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
      <p>Avaliable in all stores where awesomeness is sold:</p>
        <ul className="store-list">
        {this.state.stores.map((store, index) => {
          console.log(store);
          return (
            <li className="list-item" key={store.id}>{store.name}
              <span className="address">{store.address}</span>
              <span className="click-desc"><Link to={'/store/' + store.id}>Click to see Map</Link></span>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}
