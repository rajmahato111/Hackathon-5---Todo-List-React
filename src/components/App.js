import React, { useState } from "react";
import "./../styles/App.css";
import List from './List';

function App()
{
	let [tasks, setTask] = useState([]);
	let [newTask, setNewTask] = useState("");
	
	const addTask = () => {
		tasks.push(newTask);
		setTask([...tasks]);
		setNewTask("");
	}
	
	const addTaskToList = (e) => {
		setNewTask(e.target.value);
	}

	const editHandler = (editedValue, taskId) =>{
		tasks[taskId] = editedValue;
		setTask([...tasks]);
	}

	const deleteHandler = (taskId) =>{
		tasks.splice(taskId, 1);
		setTask([...tasks]);
		console.log("Item with ", taskId, " is deleted");
	}

	return (
	<div id="main">
		<textarea  id="task" onChange={addTaskToList} value={newTask}></textarea>
		<button  id="btn" onClick={addTask} disabled={newTask.trim().length === 0}>Add Task to the List</button>
		{tasks.map((task, idx) => {
			return <List task={task} key={idx} idx={idx} onDelete={deleteHandler} onEdit={editHandler} />
		})}
	</div> 
	);
}


export default App;