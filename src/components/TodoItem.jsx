import React, { Component } from 'react';

class TodoItem extends Component{
	render(){
		const todo = this.props.item;
		const index = this.props.index;
		let str = todo.done ? 'marquer à faire' : 'marque comme fait';
		return (
			<div className = "todo" key="todo-{todo.title}" >{todo.title}
				<button onClick={() => this.props.toggleTodo(todo, index)}>
					{str}
				</button>
			</div>
		);
	}
}

export default TodoItem;