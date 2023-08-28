import './App.css';
import Navbar from './components/Navbar';
import Category from './pages/Category';
import HomePage from './pages/HomePage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Router>
        <Routes>
           <Route exact path='/' element={<HomePage />} />
           <Route exact path='/category' element={<Category />} />
        </Routes>
      </Router>
      <HomePage />
    </div>
  );
}

export default App;
