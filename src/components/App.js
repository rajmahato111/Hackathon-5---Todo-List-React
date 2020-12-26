import React ,{useState}from "react";
import "./../styles/App.css";

window.id = 0;
function App() 
{
	const [value,setValue] = useState("");
	const [tasks,setTasks] = useState([]);
	const [active,setActive] = useState(true);
	
	function handleChange(e){
		if(value === ""){
			setActive(false);
		}
		setValue(e.target.value);
	}
	function handleSave(){
		if(value !== ""){
			const newTasks = [...tasks,{key:window.id++,text:value}];
			setTasks(newTasks);
			setValue("");
		}
	}
	function handleEdit(id){
		const newValue = tasks.filter((task) => task.key === id);
		const newTasks = tasks.filter((task) => task.key !== id);
		setTasks(newTasks);
		setValue(newValue[0].text);
	}
	function handleDelete(id){
		const newTasks = tasks.filter((task) => task.key !== id);
		setTasks(newTasks);
	}
	return (
	<div id="main">
		<textarea id="task" className="editTask" onChange={handleChange} value={value}>{value}</textarea>
		<button id="btn" className ="saveTask" onClick={() => handleSave()} disable={active}>Save</button>
		<ul>
			{tasks.map((task) => {
				return (
					<div key={task.key}>
						<li className="list">{task.text}</li>
						<button className="edit" onClick={() => handleEdit(task.key)}>Edit</button>
						<button className="delete" onClick={() => handleDelete(task.key)}>Delete</button>

					</div>
				);
			})}
		</ul>
	</div>
	);
}


export default App;