import React, { Component } from 'react'
import './app.scss'

import NavBar from '../Shared/Components/navbar/navbar'
import {Route, Redirect} from 'react-router-dom'
import TodoList from './todo/todo'
import TodoNew from './todo-new/todo-new'

export class app extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
                <NavBar />
                <Route exact path="/app" render={ () => <Redirect to="/app/todos" /> } />
                <Route path="/app/todos" component={TodoList} />
                <Route path="/app/add-todo" component={TodoNew} />
            </>
        )
    }
}

export default app
