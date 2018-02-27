import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import TodoForm from './components/TodoForm';

class Comp extends Component{

	constructor(props){
		super(props);
		this.state = {
			todos: []
		};
	}

	onNewTodo(todo){
		let newTodoList = this.state.todos;
		newTodoList.push(todo);
		this.setState({todos: newTodoList});
	}

	toggleTodoState(todo, index){
		let _todo = todo;
		_todo.done = !todo.done;
		let newTodos = this.state.todos;
		newTodos[index] = _todo;
		this.setState({todos:newTodos});
	}

	render(){
		return(	
			<div className="App">
			<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Application TODO List</h1>
			</header>
			<p className="App-intro">
				<TodoForm onTodoPrev={this.onNewTodo.bind(this)} />
				<List todos = {this.state.todos} onTodoToggle={this.toggleTodoState.bind(this)} />
			</p>
			</div>
			);
		}
}

export default Comp;