import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
	return (
		<div className="App">
			<header className="App-header mb-5">
				<h1>Dictionary</h1>
			</header>
			<Dictionary />
			<Footer />
		</div>
	);
}

export default App;
