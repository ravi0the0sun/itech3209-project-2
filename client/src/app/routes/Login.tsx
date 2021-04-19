import { useState, useContext } from 'react';
import {} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { login } from 'common/api/index';
import 'app/styles/Login.css';

import { UserContext } from 'app/context/UserContext';

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
			<div className={'outerContiner'}>
				<div className={'container'}>
					<h1 className={'heading'}>Login</h1>
					<div className={'formContainer'}>
						<form>
							<label className={'label'}>
								Username <br />
								<input
									className={'input'}
									type={'text'}
									value={username}
									onChange={e => setUsername(e.target.value)}
								/>
							</label>
							<br />
							<label className={'label'}>
								Password <br />
								<input
									className={'input'}
									type={'password'}
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</label>
						</form>
					</div>
					<div className={'btnContainer'}>
						<button
							onClick={() => {
								loginHandler(username, password);
							}}>
							Login!
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
