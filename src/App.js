import logo from './logo.svg';
import './App.css';
import Tree from './Tree'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import NewUser from './NewUser';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} >
          <Route index element={<Tree/>}/>
          <Route path="/test" element={<div> test </div>}/>
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/create-user" element={<NewUser navigateTo={'/login'}/>} />
      </Routes>
    </Router>
  );
}

export default App;