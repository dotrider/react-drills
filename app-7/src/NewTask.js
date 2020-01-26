import React, {Component} from 'react';


export default class NewTask extends Component{
constructor(){
    super();
    this.state ={
        input: ''
    }
}

handleInputChange = (value) => {
    console.log(this.handleInputChange)
    this.setState({
        input: value
    })
}

handleAdd = () => {
    console.log(this.handleAdd)
    this.props.add(this.state.input);
    this.setState({
        input: ''
    })
}

render(){
    return(
        <div>
            <input value={this.state.input} placeholder='Enter new task'
            onChange={(e)=>this.handleInputChange(e.target.value)}/>

            <button onClick={this.handleAdd}>Add</button>
        </div>
    )
}

}