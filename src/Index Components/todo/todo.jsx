import React, { Component } from 'react'
import './todo.scss'
import TodoItem from '../../Shared/Components/todo-item/todo-item'

export class todo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount(){

        fetch("http://localhost:8080/Work/Face44%20Coding%20Challenge/React%20Version/TodoApp-Test-REACT-VERSION-Face44/api/index.php",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                operation : "list"
            })
        })
        .then( j => j.json() )
        .then( response => {
            console.log(response)
        })

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
