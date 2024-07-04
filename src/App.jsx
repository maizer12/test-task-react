import { RouterProvider } from 'react-router-dom';
import Layout from './layout';
import router from './router';

function App() {
	return (
		<Layout>
			<RouterProvider router={router} />
		</Layout>
	);
}

export default App;
