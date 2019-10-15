import React, { Component } from 'react'
import './todo-item.scss'

export class TodoItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="todo-item">
                <div className="todo-title">{this.props.data.title}</div>
                <div className="todo-desc">
                    {this.props.data.description}
                </div>
                <div className="todo-date"> 
                    {
                        new Date(parseInt(this.props.data.timestamp)).toDateString() +" at "+ 
                        new Date(parseInt(this.props.data.timestamp)).toLocaleString().split(",")[1]
                    } 
                </div>
                <div className="todo-controls">
                    <span className="btn btn-primary" > Update </span>
                    <span className="btn btn-danger"> Delete </span>
                </div>
            </div>
        )
    }
}

export default TodoItem
