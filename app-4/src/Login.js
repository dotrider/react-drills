import React, {Component} from 'react';

export default class Login extends Component{
constructor(){
    super();

    this.state = {
        username: '',
        password: ''
    }
}

userName = (value) => {
    // console.log(this.userName)
    this.setState({
        username: value
    })
}
passWord = (value) => {
    // console.log(this.passWord)
    this.setState({
        password: value
    })
}

loginBtn = () => {
    // console.log(this.loginBtn)
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
}


render() {


    return (
        <div>
            <input type='text' onChange={(e) => this.userName(e.target.value)}/>
            <input type='text' onChange={(e) => this.passWord(e.target.value)}/>
            <button onClick={this.loginBtn}>Login</button>
        </div>
    )
}
}