import { useContext } from 'react';
import {} from '@material-ui/core';
import { UserContext } from '../context/UserContext';
import AdminDashboard from '../components/AdminDashboard';

export default function Clients() {
	const user: any = useContext(UserContext);
	return <>{!(user?.role > 0) ? <p>Hello user</p> : <AdminDashboard />}</>;
}
