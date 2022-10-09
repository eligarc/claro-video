import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import MainLayout from '@layouts/MainLayout';

const App = () => {
	return (
		<BrowserRouter>
			<MainLayout>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
};

export default App;
