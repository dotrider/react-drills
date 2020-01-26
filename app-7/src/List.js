import React, {Component} from 'react';
import Todo from './Todo'

export default class List extends Component{

render(){
    let list = this.props.tasks.map((e,i)=> {
        return <Todo key={i} task={e}/>
    })
    return(
        <div>
            {list}
        </div>
    )
}

}