import React, { Component } from 'react'
import './navbar.scss'
import {NavLink} from 'react-router-dom'

export class navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             navLinks : []
        }
    }

    componentDidMount(){
        const links = [
            {path: '/app/todos', label: 'My Todos', icon: 'far fa-check-circle'},
            {path: '/app/add-todo', label: 'Add Todo', icon: 'fas fa-feather-alt'}
        ]
        this.setState({
            navLinks : links
        })
    }
    
    render() {
        return (
            <div className="todos-Nav">
                <ul>
                    {
                        this.state.navLinks.map( (link, idx) => {
                            return(
                                <li key={idx}>
                                    <NavLink to={link.path} activeClassName="activeLink"> <i className={link.icon}></i> {link.label}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default navbar
