import { useState } from "react";
import { Info } from "./Info";
import { Work } from "./Work";
import { Task } from "./Task";

export const Test = ({ h }) => {
	const [count, setCount] = useState(1);
	return (
		<ul>
			<button onClick={() => setCount(1)}>Info</button>
			<button onClick={() => setCount(2)}>work</button>
			<button onClick={() => setCount(3)}>Task</button>
			{count === 1 && <Info />}
			{count === 2 && <Work />}
			{count === 3 && <Task />}
		</ul>
	);
};
