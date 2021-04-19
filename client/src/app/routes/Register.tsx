import { useState } from 'react';
import {} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { register } from 'common/api/index';

export default function Clients() {
	const history = useHistory();
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [address, setAddress] = useState('');
	const [dob, setDob] = useState('');

	const registerHandler = async () => {
		try {
			const res = await register(username, email, password, address, dob);
			if (res?.status === 200) {
				history.push('/login');
			}
			if (res) {
				throw new Error('error');
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<div className={'outerContiner'}>
				<div className={'container'}>
					<h1 className={'heading'}>Register</h1>
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
							Email
							<br />
							<input
								type={'email'}
								value={email}
								onChange={e => setEmail(e.target.value)}
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
						<br />
						<label>
							Address
							<br />
							<input
								type={'text'}
								value={address}
								onChange={e => setAddress(e.target.value)}
							/>
						</label>
						<br />
						<label>
							Date of Birth
							<br />
							<input
								type={'date'}
								value={dob}
								onChange={e => setDob(e.target.value)}
							/>
						</label>
					</form>
					<button onClick={registerHandler}>Register</button>
				</div>
			</div>
		</>
	);
}
