import React, { Component } from 'react';
import axios from 'axios';
import api from './Api';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './MyGreatPlace';

export default class Store extends Component {
  constructor(props){
    super(props);
    this.state={
      store:{}
    }
  }

  componentDidMount() {
    this.getStore()
  }

  getStore(){
    axios.get(api() + '/stores/' + this.props.params.storeId).then((response)=> {
      let store = response.data;
      this.setState({
        store
      })
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  render() {
    return (
      <div style={{height:'400px'}}>
      <h3>{this.state.store.name}</h3>
      <h5>{this.state.store.address}</h5>
      <h5>{this.state.store.hours}</h5>
      <GoogleMap
        center={{lat:this.state.store.lat, lng: this.state.store.lng}}
        defaultZoom={13} >
        <MyGreatPlace lat={this.state.store.lat} lng={this.state.store.lng} text={'A'} /* Kreyser Avrora */ />
      </GoogleMap>
      </div>
    )}
  }
