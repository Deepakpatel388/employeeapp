import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import Search from './pages/Search';


function App() {
  return (
    <Routes >
      <Route path='/' element={<HomePage />}/>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/search' element={<Search />} />
    </Routes>
  );
}

export default App;
