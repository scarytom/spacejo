import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { DemoBoard } from "./pages/DemoBoard/index.jsx";
import { NotFound } from './pages/_404.jsx';
import { Sandbox } from "./pages/Sandbox/index.jsx";
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/demoboard" component={DemoBoard} />
					<Route path="/sandbox" component={Sandbox} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
