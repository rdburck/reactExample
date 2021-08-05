import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

import { BrowserRouter as Router, Route, Switch } from 
"react-router-dom";

import ThemePicker from "./components/ThemePicker";
import Counter from "./components/Counter";
import Card from "./components/Card";
import Gallery from "./pages/Gallery";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import About from "./components/About";
import Testimonials from "./components/Testimonials"
import Quiz from "./components/Quiz"

function App() {
	return (
		<div>
			<NavBar />
			<Router>
				<Switch>
					<Route exact path ="/" component={Counter} />
					<Route exact path ="/gallery" component={Gallery} />
					<Route exact path ="/about" component={About} />
					<Route exact path ="/testimonials" component={Testimonials} />
					<Route exact path ="/quiz" component={Quiz} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
