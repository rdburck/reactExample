import React from "react";
import "./style.css";

const Counter = () => {
	function decrementCount() {}

	function incrementCount() {}

	return (
		<div>
			<button onClick={decrementCount}>-</button>

			<button onClick={incrementCount}>+</button>
		</div>
	);
};

export default Counter;
