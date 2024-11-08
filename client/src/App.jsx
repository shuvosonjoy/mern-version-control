


import { Routes, Route } from 'react-router-dom';
import  LoginPage  from './component/login';
import HomePage from './component/home-page.jsx';
import SignUpPage from './component/signUp-page';

import  Sidebar  from './component/sidebar';




function App() {

	return (
		<div className='flex text-white'>
			<Sidebar />
			<div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/signup' element={<SignUpPage />} />
					{/* <Route path='/explore' element={<ExplorePage />} /> */}
					{/* <Route path='/likes' element={<LikesPage />} /> */}
				</Routes>
			</div>
		</div>
	);

}

export default App;
