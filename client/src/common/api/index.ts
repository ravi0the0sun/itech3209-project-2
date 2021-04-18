import axios from 'axios';

const url = 'http://localhost:8080';

export const login = async (username: string, password: string) => {
	try {
		const res = await axios.post(`${url}/api/login`, {
			username: username,
			password: password,
		});
		return res.data.user;
	} catch (err) {}
};

export const register = async (
	username: string,
	email: string,
	password: string,
	address: string,
	dob: string
) => {
	try {
		const res = await axios.post(`${url}/api/register`, {
			username: username,
			email: email,
			password: password,
			dob: dob,
			address: address,
		});
		return res;
	} catch (err) {}
};
