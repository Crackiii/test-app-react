import React, { Component } from 'react'
import './todo-new.scss'

import {httpPost} from '../../Shared/Services/ajax'

export class TodoNew extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            todo_title : this.props.title || '',
            todo_desc : this.props.desc || ''
        }

        this.todoNewSubmit = this.todoNewSubmit.bind(this)
        this.handleTodoInput = this.handleTodoInput.bind(this)
    }

    componentDidMount(){
        console.log(this.props)
    }

    flushState(){
        this.setState({
            todo_title : '',
            todo_desc : ''
        })
    }

    handleTodoInput(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    async todoNewSubmit(event){
        event.preventDefault()

        if(this.state.todo_title === "" && this.state.todo_desc === ""){
            return
        } else{
            const response = await httpPost(this.props.operation || "create", {
                todo_title : this.state.todo_title,
                todo_desc : this.state.todo_desc,
                id : Number(this.props.id),
                timestamp: new Date().getTime()
            })
            if(response.inserted || response.updated){
                if(this.props.didUpdated){
                    this.props.didUpdated()
                }
                this.flushState()
            }
            console.log(response);
        }

    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row todo-new">
                    <div className="col-6 offset-3 ">
                        <form onSubmit={this.todoNewSubmit}>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Title..." name="todo_title" value={this.state.todo_title} onChange={this.handleTodoInput} />
                            </div>
                            <div className="form-group">
                                <textarea rows={5} className="form-control" type="text" placeholder="Todo Description..." name="todo_desc" value={this.state.todo_desc} onChange={this.handleTodoInput} />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary" >Add Todo Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoNew
