// React router imports
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
	return (
		<main className="bg-slate-300/20">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</Router>
		</main>
	);
};

export default App;
