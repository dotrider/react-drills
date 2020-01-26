import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      //filterStr with an empty string as a value 
      filterStr: '',
      //foods with an array of strings
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']

    }

  }
  //filter
  filStr = (value) => {
    console.log('filStr value', value);
    this.setState({
      filterStr: value
    })
  }


  render(){
    
    let foodsToDisplay = this.state.foods.filter((element,index) => {
      return element.includes(this.state.filterStr);
    })
    .map((element,index) => {
      return <h2 key={index}>{element}</h2>
    })
  return (
    <div className="App">
     
      <input onChange={e => this.filStr(e.target.value)} type ='text' />
      {foodsToDisplay}
    </div>
  );
}
}

