import { useState, useContext } from 'react';
import {} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { login } from '../../common/api/index';

import { UserContext } from '../context/UserContext';

export default function Clients() {
	const location = useLocation();
	const history = useHistory();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { setUser } = useContext(UserContext);

	const loginHandler = async (username: string, password: string) => {
		const { from }: any = location.state || { from: { pathname: '/' } };
		const user = await login(username, password);
		setUser(user);
		history.replace(from);
	};
	return (
		<>
			<h1>Login</h1>
			<form>
				<label>
					Username
					<br />
					<input
						type={'text'}
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Password
					<br />
					<input
						type={'password'}
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</label>
			</form>
			<button
				onClick={() => {
					loginHandler(username, password);
				}}>
				Login!
			</button>
		</>
	);
}
