import React, {Component} from "react";
import uuid from "uuid/v4";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addTodo({...this.state, id: uuid(), completed: false});
        this.setState({
            task: ""
        })
    }

    render(){
        return(
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
            <label htmlFor="task" >New Todo:</label>    
            <input 
            id="task"
            placeholder="write new todo"
            required
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChange} /> 
            </form>
           
        )
    }
}
export default NewTodoForm;