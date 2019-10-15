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

    handleTodoInput(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    todoNewSubmit(event){
        event.preventDefault()
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row todo-new">
                    <div className="col-6 offset-3 ">
                        <form onSubmit={this.todoNewSubmit}>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Title" name="todo_title" value={this.state.todo_title} onChange={this.handleTodoInput} />
                            </div>
                            <div className="form-group">
                                <textarea rows={5} className="form-control" type="text" placeholder="Title" name="todo_desc" value={this.state.todo_desc} onChange={this.handleTodoInput} />
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
