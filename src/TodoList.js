import React, {Component} from "react";
import NewTodoForm from "./NewTodoForm"
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state ={
            tasks: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    updateTodo(id, updatedTask){
        const updatedTodos = this.state.tasks.map(task => {
            if(task.id === id){
                return{...task, task: updatedTask}
            }
            return task;  
        })
        this.setState({tasks: updatedTodos})
    }

    toggleCompletion(id){
        const updatedTodos = this.state.tasks.map(task => {
            if(task.id === id){
                return{...task, completed: !task.completed}
            }
            return task;  
        })
        this.setState({tasks: updatedTodos})
    }
    
    addTodo(task){
        this.setState( state => ({
            tasks: [...state.tasks, task]
        }))
    }

    removeTodo(id){
        this.setState({
            tasks: this.state.tasks.filter(task => task.id!==id)
        })}

    render(){
        const tasks = this.state.tasks.map(task => {
            return(
   
                   <Todo 
                  id={task.id}
                  key={task.id}
                  task={task.task}
                  completed={task.completed}
                  removeTodo={this.removeTodo}
                  updateTodo={this.updateTodo}
                  toggleCompletion={this.toggleCompletion}
                   />  
            )
            }
        )
        return(
            <div className="TodoList">
              <h1>Todo List! <span>A simple React Todo List App.</span></h1>
         <NewTodoForm addTodo={this.addTodo} />
                    <ul>
                       {tasks} 
                    </ul>
            </div>
        )
    }
}
export default TodoList;