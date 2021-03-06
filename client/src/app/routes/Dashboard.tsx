import { useContext } from 'react';
import {} from '@material-ui/core';
import { UserContext } from 'app/context/UserContext';
import AdminDashboard from 'app/components/AdminDashboard';

export default function Dashboard() {
	const { user } = useContext(UserContext);
	return (
		<>{!(user?.role > 0) ? <p>Hello {user.username}</p> : <AdminDashboard />}</>
		// <>
		// 	<p>Hello {JSON.stringify(user)}</p>
		// </>
	);
}
