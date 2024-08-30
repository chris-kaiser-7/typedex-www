import './App.css';
import Tree from './routes/Tree'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './routes/Login';
import NewUser from './routes/NewUser';
import Book from './routes/Book'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard homeurl={'/'}/>}>
          <Route index element={<Tree/>}/>
          <Route path="/book" element={<Book/>}/>
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/create-user" element={<NewUser navigateTo={'/login'}/>} />
      </Routes>
    </Router>
  );
}

export default App;