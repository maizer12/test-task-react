import { RouterProvider } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import router from './router';

function App() {
	return (
		<Layout>
			<RouterProvider router={router} />
		</Layout>
	);
}

export default App;
