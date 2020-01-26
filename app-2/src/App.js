import React, {Component} from 'react';
import './App.css';




export default class App extends Component {
//contructor and state setup
constructor(){
  super();

  this.state = {

    foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']

  }
}
//methods setup



//render setup
render(){
  const {foods} = this.state

  let foodDisplay = foods.map((e,i) => <h2 key={i}>{e}</h2>);

  return(

    <div className='App'>
      {foodDisplay}
    </div>

  )
}

}