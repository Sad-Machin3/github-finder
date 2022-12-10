import { Route, Routes } from 'react-router-dom';
import Alert from './components/layouts/Alert';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import { AlertContextProvider } from './context/alert/AlertContext';
import { GithubContextProvider } from './context/github/GithubContext';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import User from './pages/User';

const App = () => {
	return (
		<GithubContextProvider>
			<AlertContextProvider>
				<div className='flex flex-col justify-between h-screen'>
					<Navbar />

					<main className='container mx-auto px-3 pb-12 '>
						<Alert />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/user/:login' element={<User />} />
							<Route path='/notfound' element={<NotFound />} />
							<Route path='/*' element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</AlertContextProvider>
		</GithubContextProvider>
	);
};
export default App;
