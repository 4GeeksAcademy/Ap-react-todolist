import React, { useState } from "react";

//include images into your bundle



//create your first component
function Todolist () {
	const [toDoList, settoDoList]= useState([])
	const [task, setTask]= useState("")
	function deleteTask(index){
		settoDoList (value=>value.filter((task, taskIndex)=>taskIndex!=index))
	}

	return (
		<div className="container">
			<input className="form-control mt-5" onChange={(e)=>setTask(e.target.value)} onKeyDown={(e)=>{
				if (e.key=="Enter"){
					settoDoList([...toDoList, task])
					setTask("")
				}
			}} value={task} type="text"/>
			<h5>{toDoList.length?`${toDoList.length} items left`:"No task, Add a task"}</h5>
			{toDoList.map((task, index)=> <div className="hoverbtn bg-dark d-flex p-2 justify-content-between rounded text-light my-2">
				<h1>{task}</h1>
				<span onClick={()=>deleteTask(index)} className="btn btn-danger">Delete</span>
			</div>)}
			
		</div>
	);
};

export default Todolist;
