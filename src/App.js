import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import TodoList from './components/todolist/TodoList';
import "./App.css";

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
          			<Route path="/signin" element={<Login></Login>}></Route>
          			<Route path="/signup" element={<SignUp></SignUp>}></Route>
					<Route path='/todo' element={<TodoList></TodoList>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
