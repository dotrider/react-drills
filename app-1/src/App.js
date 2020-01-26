import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

//1)create a class
export default class App extends Component {
//2)add constructor
constructor(){
  super();

  this.state = {
    message: ''
  };
}

handleChange(value){
  // console.log(this.handleChange)
  this.setState({ message: value })
}

render() {
  const {message} = this.state
  return (
    <div className="App">
    <input onChange={event => this.handleChange(event.target.value)} type='text'/>
    <p>{message}</p>
    </div>
  );
 }
}

