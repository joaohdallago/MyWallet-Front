import GlobalStyles from '../theme/globalStyles';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './login';
import SignUp from './sign-up';
import Wallet from './wallet';

import UserContext from '../contexts/userContext';

export default function App() {
	const [ user, setUser ] = useState({});

	return (
		<>
			<GlobalStyles />
			<UserContext.Provider value={{user, setUser}}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Login />}/>
						<Route path='/sign-up' element={<SignUp />}/>
						<Route path='/wallet' element={user.token ? <Wallet {...{user, setUser}} /> : <Navigate to='/' replace/>} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}

// user.token ? <Wallet /> : <Navigate to='/' replace/>