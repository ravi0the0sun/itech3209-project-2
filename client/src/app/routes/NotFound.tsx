import { useLocation } from 'react-router-dom';

export default function NotFound() {
	const location = useLocation();

	return (
		<>
			<h1>404 Error</h1>
			<p>path {location.pathname} not found!</p>
		</>
	);
}
