import './assets/style/null.scss'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/product/:productId' element={<ProductPage />} />
			</Routes>
		</div>
	)
}

export default App
