import React, { Component } from 'react'
import './todo.scss'
import TodoItem from '../../Shared/Components/todo-item/todo-item'

export class todo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             todos : [],
             noData : false
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
        // .then(r => {
        //     r.text().then(res => {
        //         console.log(res);
        //     })
        // })
        .then( j => j.json() )
        .then( response => {
            if(response.length > 0){
                this.setState({
                    todos : response
                })
            } else{
                this.setState({
                    noData : true
                })
            }
        })

    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {
                        !this.state.noData ?
                        this.state.todos.map( (data, idx) => {
                            return(
                                <div className="col-sm-12 col-md-4 col-lg-3" key={idx}> <TodoItem data={data} /> </div>
                            )
                        }) : 

                        <h3>No Data Found !</h3>
                    }
                </div>
            </div>
        )
    }
}

export default todo
