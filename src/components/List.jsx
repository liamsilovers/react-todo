import React, { Component} from 'react';
import TodoItem from './TodoItem';

class List extends Component{
	render(){
		return(
			<div className="todos-list">
				<p>Todos : [{this.props.todos.length}]</p>
				{ this.showTodos(this.props.todos) }
			</div>
		);
	}

	toggleTodo(todo, index){
		console.log('onClick todo', todo, index);
		this.props.onTodoToggle(todo, index);
	}

	showTodos(todos){
		/*return(
			todos.map((todo, index) => {
				<TodoItem item={todo}
						  index={index}
					  	  toggleTodo={this.toggleTodo} />
					  	  console.log(todo, index);
			})
		);*/
		return(
			todos.map((todo, index) => {
				return(
					<TodoItem item={todo}
						  index={index}
					  	  toggleTodo={this.toggleTodo.bind(this)} />
				);
			})
		);
	}
}

export default List;