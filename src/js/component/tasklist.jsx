import React, { useState, useEffect } from "react";
import { Button } from "bootstrap";

export function MyToDoList(e) {
	const [task, setTask] = useState([]);
	const [text, setText] = useState("");
	let MyTextValue = e => {
		setText(e.target.value);
	};
	let MyTaskAdder = event => {
		if (event.key === "Enter") {
			let newTask = event.target.value;
			if (newTask) {
				setTask(task => [...task, text]);
				// console.log(task);
				let myList = document.querySelector("#inputRecive");
				myList.value = "";
			}
		}
	};
	let MyTaskDelete = i => {
		task.splice(i, 1);
		console.log(task);
	};
	// useEffect(() => {}, []);

	// useEffect(() => {}, []);

	return (
		<div>
			<h1>To do List</h1>
			<input
				id="inputRecive"
				type="text"
				placeholder="New Task"
				onChange={e => MyTextValue(e)}
				onKeyPress={event => {
					MyTaskAdder(event);
				}}
			/>
			<ul id="myUl">
				{task.map((taskitem, i) => {
					return (
						<li key={i}>
							{taskitem}
							<button onClick={() => MyTaskDelete(i)}>X</button>
						</li>
					);
				})}
			</ul>
			<p>
				{task.length}
				<span>tareas</span>
			</p>
		</div>
	);
}
