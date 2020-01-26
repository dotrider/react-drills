import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      
      list: [],
      input: ''
    }

  }
  
 handlerInput = (value) => {
   console.log(this.handlerInput)
   this.setState({
     input: value
   })
 }


 handlerAddTask = () =>{
   console.log(this.handlerAddTask)
   this.setState({
     list: [...this.state.list, this.state.input],
     input: ''
   })
 }


  render(){
    let list = this.state.list.map((e,i) => {
      return <Todo key={i} task={e}/>
    });
  return (
    <div className="App">
      <h1>My to-do List</h1>
      <div>
        <input type='text' placeholder='Enter to-do list' onChange={(e) => this.handlerInput(e.target.value)}/>
        <button onClick={this.handlerAddTask}>Add</button>
    </div>
    <br/>
      {list}
   </div>
  );
}
}

