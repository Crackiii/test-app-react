import React, { Component } from 'react'
import './todo.scss'
import TodoItem from '../../Shared/Components/todo-item/todo-item'

export class todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-3"> <TodoItem /> </div>
                    <div className="col-sm-12 col-md-4 col-lg-3"> <TodoItem /> </div>
                    <div className="col-sm-12 col-md-4 col-lg-3"> <TodoItem /> </div>
                    <div className="col-sm-12 col-md-4 col-lg-3"> <TodoItem /> </div>
                    <div className="col-sm-12 col-md-4 col-lg-3"> <TodoItem /> </div>
                    <div className="col-sm-12 col-md-4 col-lg-3"> <TodoItem /> </div>
                    <div className="col-sm-12 col-md-4 col-lg-3"> <TodoItem /> </div>
                    <div className="col-sm-12 col-md-4 col-lg-3"> <TodoItem /> </div>
                    <div className="col-sm-12 col-md-4 col-lg-3"> <TodoItem /> </div>
                </div>
            </div>
        )
    }
}

export default todo
