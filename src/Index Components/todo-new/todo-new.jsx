import React, { Component } from 'react'
import './todo-new.scss'

export class TodoNew extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            todo_title : '',
            todo_desc : ''
        }

        this.todoNewSubmit = this.todoNewSubmit.bind(this)
        this.handleTodoInput = this.handleTodoInput.bind(this)
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

    todoNewSubmit(event){
        event.preventDefault()

        fetch("http://localhost:8080/Work/Face44%20Coding%20Challenge/React%20Version/TodoApp-Test-REACT-VERSION-Face44/api/index.php",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                ...this.state,
                timestamp: new Date().getTime(),
                operation : "create"
            })
        })
        .then( j => j.json() )
        .then( response => {
            if(response.inserted){
                this.flushState()
            }
        })

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
