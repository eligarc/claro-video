import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import MainLayout from '@layouts/MainLayout';
import AppContext from '@context/AppContext';
import useClaroVideoChannels from '@hooks/useClaroVideoChannels';

const App = () => {
	const initialState = useClaroVideoChannels();
	const isEmpty = Object.keys(initialState.channels).length;
	return (
		<>
			{isEmpty > 0 ? (
				<AppContext.Provider value={initialState}>
					<BrowserRouter>
						<MainLayout>
							<Routes>
								<Route exact path='/' element={<Home />} />
								<Route path='*' element={<NotFound />} />
							</Routes>
						</MainLayout>
					</BrowserRouter>
				</AppContext.Provider>
			) : (
				<h1>Cargando página...</h1>
			)}
		</>
	);
};

export default App;
