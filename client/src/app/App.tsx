import './styles/App.css';

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect,
} from 'react-router-dom';

import About from './routes/About';
import Clients from './routes/Clients';
import Profile from './routes/Profile';
import Dashboard from './routes/Dashboard';
import Register from './routes/Register';
import Login from './routes/Login';
import NotFound from './routes/NotFound';
import Home from './routes/Home';

import { UserContext } from './context/UserContext';
import useUserSate from '../common/hooks/useUserState';

import logo from '../assets/images/logo.png';

export default function App() {
	const [userProvider, user, setUser] = useUserSate();
	return (
		<Router>
			<div className={'navContainer'}>
				<nav className={'innerContainer'}>
					<div>
						<img src={logo} alt={'logo'} id={'logoImg'} />
					</div>
					{!user ? (
						<ul>
							<div className={'listContiner'}>
								<li className={'navBtn'}>
									<Link to="/home">Home</Link>
								</li>
								<li className={'navBtn'}>
									<Link to="/login">Login</Link>
								</li>

								<li className={'navBtn'}>
									<Link to="/register">Register</Link>
								</li>
								<li className={'navBtn'}>
									<Link to="/about">About</Link>
								</li>
								<li className={'navBtn'}>
									<Link to="/clients">Clients</Link>
								</li>
							</div>
						</ul>
					) : (
						<ul>
							<li>
								<Link to="/dashboard">Dashboard</Link>
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
						</ul>
					)}
				</nav>
				<UserContext.Provider value={userProvider}>
					<Switch>
						<Route path="/about" component={About} />
						<Route path="/clients" component={Clients} />
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
						<Route path="/home" component={Home} />
						<Route path="/" exact>
							{!user ? <Redirect to="/home" /> : <Redirect to="/dashboard" />}
						</Route>
						<Route path="/dashboard">
							{!user ? <Redirect to="/login" /> : <Dashboard />}
						</Route>
						<Route path="/profile">
							{!user ? <Redirect to="/login" /> : <Profile />}
						</Route>
						<Route path="*" component={NotFound} />
					</Switch>
				</UserContext.Provider>
			</div>
		</Router>
	);
}
