import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home.jsx'));

const routes = [
	{
		path: '/',
		element: <Home />,
	},
];

export default routes;
