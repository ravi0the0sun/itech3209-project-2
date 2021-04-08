import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import About from './routes/About';
// import Clients from './routes/Clients';
// import Profile from './routes/Profile';
// import Dashboard from './routes/Dashboard';
// import Register from './routes/Register';
// import Login from './routes/Login';

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

				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/profile">
						<Profile />
					</Route>
					<Route path="/clients">
						<Clients />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Dashboard />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

const Dashboard = () => <h1>Hello</h1>;
const About = () => <h1>About</h1>;
const Profile = () => <h1>Profile</h1>;
const Clients = () => <h1>Clients</h1>;
const Register = () => <h1>Register</h1>;
const Login = () => <h1>Login</h1>;
