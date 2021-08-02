import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.min.css";

import Footer from "./components/Footer";
import Header from "./components/Header";

import NavBar from "./components/Navbar";

function App() {
	return (
		<div>
			<NavBar />
			<Header />
			<Footer />
		</div>
	);
}

export default App;
