import React, { Component } from 'react'
import './todo-item.scss'


export class TodoItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             itemData : ''
        }

        this.updateItem = this.updateItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    componentDidMount(){
        this.setState({
            itemData : this.props.data
        })
    }

    updateItem(){
        this.props.onUpdate(this.state.itemData)
    }
    
    deleteItem(){
        this.props.onDelete(this.state.itemData)
    }

    render() {
        return (
            <div className="todo-item">
                <div className="todo-title">{this.props.data.title}</div>
                <div className="todo-desc">
                    {this.props.data.description}
                </div>
                <div className="todo-date"> 
                    {
                        new Date(parseInt(this.props.data.timestamp)).toDateString() +" at "+ 
                        new Date(parseInt(this.props.data.timestamp)).toLocaleString().split(",")[1]
                    } 
                </div>
                <div className="todo-controls">
                    <span className="btn btn-primary" onClick={this.updateItem} > Update </span>
                    <span className="btn btn-danger" onClick={this.deleteItem}> Delete </span>
                </div>
            </div>
        )
    }
}

export default TodoItem
