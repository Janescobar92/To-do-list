import React, { useState, useEffect } from "react";

export function MyToDoList(e) {
	const [task, setTask] = useState([]);
	const [text, setText] = useState("");

	let MyTextValue = e => {
		setText(e.target.value);
		// console.log(text);
	};
	let MyTaskAdder = event => {
		// event.preventDefault();
		if (event.key === "Enter") {
			setTask(task => [...task, text]);
			// setTask(task.push(text));
			// console.log(task);
			// console.log(text);
			MyListGenerator();
		}
	};

	// let MyListGenerator = () => {
	// 	let myList = document.querySelector("#inputRecive");
	// 	if (!task.length == 0) {
	// 		console.log("condicion admitida");
	// 		task.map((taskitem, i) => {
	// 			return <li key="task">{taskitem}</li>;
	// 		});
	// 	} else {
	// 		<li key="task">{"No task added"}</li>;
	// 		console.log("fail");
	// 	}
	// };
	useEffect(
		() => {
			let myList = document.querySelector("#inputRecive");
			if (!task.length == 0) {
				console.log("condicion admitida");
				task.map((taskitem, i) => {
					return <li key="task">{taskitem}</li>;
				});
			} else {
				<li key="task">{"No task added"}</li>;
				console.log("fail");
			}
		},
		[task]
	);

	return (
		<div>
			<input
				id="inputRecive"
				type="text"
				placeholder="New Task"
				onChange={e => MyTextValue(e)}
				onKeyPress={event => MyTaskAdder(event)}
			/>
			<ul id="myUl">{}</ul>
		</div>
	);
}
