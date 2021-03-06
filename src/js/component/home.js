import React, { useState } from "react";

//create your first component
export function Home() {
	let [task, setTask] = useState("");
	const [taskLists, setTaskLists] = useState([]);
	const change = e => {
		setTask(e.target.value);
	};
	const AddTask = () => {
		if (task !== "") {
			const taskDetails = {
				id: Math.floor(Math.random() * 1000),
				value: task
			};

			setTaskLists([...taskLists, taskDetails]);
		}
	};
	const deletetask = (e, id) => {
		e.preventDefault();
		setTaskLists(taskLists.filter(t => t.id != id));
	};
	return (
		<div className="container">
			<div className="title">
				<h1>To Do List</h1>
			</div>
			<div className="list-group">
				<ul className="list-group">
					<li className="list-group-item">
						<input
							onChange={e => change(e)}
							placeholder="New Item"></input>
						<button
							className="btn btn-success float-right"
							onClick={AddTask}>
							Add
						</button>
					</li>
					{taskLists !== [] ? (
						<li>
							{taskLists.map(t => (
								<li className="list-group-item">
									{t.value}
									<button
										className="btn btn-danger float-right"
										onClick={e => deletetask(e, t.id)}>
										X
									</button>
								</li>
							))}
						</li>
					) : null}
					<li className="list-group-item">contador</li>
				</ul>
			</div>
		</div>
	);
}
