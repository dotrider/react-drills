import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask';
import List from './List';



export default class App extends Component{
  constructor(){
    super();

    this.state = {
        list: []
    }
  }

  handleAddTask = (task) => {
    this.setState({
      //this target (list) and will make a copy of (list arr) and assign it to a (new arr)
      list: [...this.state.list, task]
    })
  }




  render(){
  return (
    <div className="App">
      <h1>My to-do List:</h1>
      <NewTask add={this.handleAddTask}/>
      <List tasks={this.state.list}/>
    </div>
  );
}
}


