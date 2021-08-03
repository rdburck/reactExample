// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

import ThemePicker from "./components/ThemePicker";
import Counter from "./components/Counter";
import Card from "./components/Card";

function App() {
	return (
		<div>
			{/* <ThemePicker /> */}
			<Counter />
			{/* <Card /> */}
		</div>
	);
}

export default App;
