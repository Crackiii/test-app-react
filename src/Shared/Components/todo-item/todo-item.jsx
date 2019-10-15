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
                <div className="todo-title">Todo Item Works</div>
                <div className="todo-desc">
                    Hi, What I was going to say is to do this shitty job. I was so nervous, and wasn't able to fullfil the job.
                </div>
                <div className="todo-date"> Aug 29, 2019 at 09:00 am </div>
                <div className="todo-controls">
                    <span className="btn btn-primary"> Update </span>
                    <span className="btn btn-danger"> Delete </span>
                </div>
            </div>
        )
    }
}

export default TodoItem
