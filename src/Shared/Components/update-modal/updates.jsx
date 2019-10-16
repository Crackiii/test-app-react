import React, { Component } from 'react'
import './update.scss'

import UpdateTodo from '../../../Index Components/todo-new/todo-new'

export class updates extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    
    
    render() {
        return (
            <div className="modal-bg">
                <UpdateTodo 
                    title={this.props.data.title} 
                    desc={this.props.data.description} 
                    id={this.props.data.id} 
                    operation="update" 
                    didUpdated={this.props.onUpdate}
                />
            </div>
        )
    }
}

export default updates
