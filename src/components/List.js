import React, { useState } from "react";
import "./../styles/App.css";

function List(props)
{
        const [editTask, setEditTask] = useState(false);
        let [updatedtask, setUpdatedTask] = useState(props.task);
        let [update, setUpdate] = useState("");

        // const deleteTask = () =>{
        //         props.onDelete(props.key)
        // }

	const editTaskInList = (e) => {
		setUpdate(e.target.value);
        }

        const updateTask = () => {
                if(update.trim().length > 0){
                        setUpdatedTask(update);
                        setEditTask(false);
                        setUpdate("");
                        props.onEdit(updatedtask, props.idx);
                }
	}
        
	const isTaskToEdit = () =>{
                setEditTask(true);
	}
	return (
                <div className= "list">
                        {updatedtask}
                        
                        
                        {editTask ? 
                        <React.Fragment>
                                <textarea className="editTask" onChange={editTaskInList} value={update}>
                                </textarea>
                                <button className="saveTask" onClick={updateTask} 
                                disabled={update.trim().length === 0}>
                                        Save
                                </button>
                        </React.Fragment>
                        : 
                        <React.Fragment>
                                <button className="edit" onClick={isTaskToEdit}>Edit</button>
                                <button className="delete" onClick={() => {props.onDelete(props.idx)}}>Delete</button>
                        </React.Fragment>}
                </div>
	);
}
export default List;