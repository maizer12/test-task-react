import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';

const finalRoutes = routes.map(route => {
	return {
		...route,
		element: route.element,
	};
});

const router = createBrowserRouter(finalRoutes);

export default router;
