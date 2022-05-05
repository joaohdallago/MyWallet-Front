import GlobalStyles from '../theme/globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './login';
import SignUp from './sign-up';

export default function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />}/>
					<Route path='/sign-up' element={<SignUp />}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
