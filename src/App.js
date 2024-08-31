import './App.css';
import Tree from './routes/Tree'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './routes/Login';
import NewUser from './routes/NewUser';
import Book from './routes/Book'
import Test from './routes/test'
import Assistant from './routes/Assistant'
import NewRoot from './routes/NewRoot'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard homeurl={'/'}/>}>
          <Route index element={<Tree/>}/>
          <Route path="/books" element={<Book/>}/>
          <Route path="/assistants" element={<Assistant/>}/>
          <Route path="/new-root" element={<NewRoot/>}/>
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/create-user" element={<NewUser navigateTo={'/login'}/>} />
      </Routes>
    </Router>
  );
}

export default App;