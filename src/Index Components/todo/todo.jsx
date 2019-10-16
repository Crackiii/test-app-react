import React, { Component } from 'react'
import './todo.scss'
import TodoItem from '../../Shared/Components/todo-item/todo-item'
import UpdateItemModal from '../../Shared/Components/update-modal/updates'
import {httpPost} from '../../Shared/Services/ajax'


export class todo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             todos : [],
             noData : false,
             updateClicked : false,
             deleteClicked : false,
             recievedData : ''
        }
        this.onDeleteItem = this.onDeleteItem.bind(this)
        this.onUpdateItem = this.onUpdateItem.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.delYes = this.delYes.bind(this)
        this.delNo = this.delNo.bind(this)
    }

    componentDidMount(){

        this.handleUpdate()

    }

    async handleUpdate(){
        const response = await httpPost("list", {})
        if(response.length > 0){
            if(this.state.updateClicked){ this.setState({updateClicked : false}) }
            this.setState({
                todos : response
            })
        } else{
            this.setState({
                noData : true
            })
        }
    }

    onDeleteItem(_data){
        console.log(_data)
        this.setState({ deleteClicked: true, recievedData : _data })
    }
    
    onUpdateItem(_data){
        this.setState({ updateClicked: true, recievedData: _data })
    }

    async delYes(){
        const response = await httpPost("delete", {id : Number(this.state.recievedData.id)})
        console.log(response)
        if(response.deleted){
            this.setState({ deleteClicked: false})
            this.handleUpdate()
        }
    }

    delNo(){
        this.setState({
            deleteClicked : false
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
                                <div className="col-sm-12 col-md-4 col-lg-3" key={idx}>
                                    <TodoItem data={data} onDelete={this.onDeleteItem} onUpdate={this.onUpdateItem}  />
                                </div>
                            )
                        }) : 

                        <h3>No Data Found !</h3>
                    }
                </div>
                {
                    this.state.deleteClicked ? 
                    <div className="modal-bg">
                        <div className="row ">
                            <div className="col-4 offset-5">
                                <div className="confirm">
                                    <p>Are you sure and want to Delete ?</p>
                                    <div>
                                        <button className="btn btn-danger" onClick={this.delYes}>Yes</button>
                                        <button className="btn btn-success" onClick={this.delNo}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ''
                }
                {
                    
                    this.state.updateClicked ?
                        <UpdateItemModal data={this.state.recievedData} onUpdate={this.handleUpdate} />
                    : ''
                }
            </div>
                            
        )
    }
}

export default todo
