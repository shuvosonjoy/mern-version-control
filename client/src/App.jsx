


import { Routes, Route } from 'react-router-dom';
import  LoginPage  from './pages/login.jsx';
import HomePage from './pages/home-page.jsx';
import SignUpPage from './pages/signUp-page.jsx';
import LikesPage from './pages/likes-page.jsx';

import  Sidebar  from './components/sidebar.jsx';



import {Toaster} from 'react-hot-toast';


import { useAuthContext } from "./context/authContext";

function App() {
	const { authUser, loading } = useAuthContext();
	console.log("Authenticated user:", authUser);

	if (loading) return null;

	return (
		<div className='flex text-white'>
			<Sidebar />
			<div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/signup' element={<SignUpPage />} />
					{/* <Route path='/explore' element={<ExplorePage />} /> */}
					<Route path='/likes' element={<LikesPage />} />
				</Routes>
				<Toaster/>
			</div>
		</div>
	);

}

export default App;
