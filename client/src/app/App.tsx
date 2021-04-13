import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import About from './routes/About';
import Clients from './routes/Clients';
import Profile from './routes/Profile';
import Dashboard from './routes/Dashboard';
import Register from './routes/Register';
import Login from './routes/Login';

import { UserContext } from './context/UserContext';

export default function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/profile">Profile</Link>
						</li>
						<li>
							<Link to="/clients">Clients</Link>
						</li>
						<li>
							<Link to="/register">Register</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</ul>
				</nav>
				<UserContext.Provider value={'hello'}>
					<Route path="/" exact component={Dashboard} />
					<Route path="/about" component={About} />
					<Route path="/profile" component={Profile} />
					<Route path="/clients" component={Clients} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
				</UserContext.Provider>
			</div>
		</Router>
	);
}
