import React from "react";

import { MyToDoList } from "./tasklist.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<MyToDoList />
		</div>
	);
}
