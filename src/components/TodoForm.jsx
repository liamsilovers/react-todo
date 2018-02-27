import React, { Component } from 'react';

class TodoForm extends Component{
	/* FX */

	onClickAddNewTODO(event)
	{
		event.preventDefault();
		console.log("call function ** onClickAddNewTODO **")
		const txt = this.todoTitle.value;
		this.props.onTodoPrev({
			title: txt,
			done: false,
			createdAt: new Date()
		});
		this.todoTitle.value = "";
	}

	/* RENDER */
	render(){
		return (
			<div className = "todo-form">
				<input type="text" placeholder="new todo ..." ref={(input) => this.todoTitle = input} /><br/>
				<button onClick={this.onClickAddNewTODO.bind(this)}>Add</button>
			</div>
		);
	}
}

export default TodoForm; 