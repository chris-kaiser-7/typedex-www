import logo from './logo.svg';
import './App.css';
import Tree from './Tree'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import NewUser from './NewUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} component={Tree} />
        <Route path="/create-user" element={<NewUser navigateTo={'/tree'}/>} component={NewUser} />
        <Route path="/tree" element={<Tree/>} component={Tree} />
        <Route path="/" element={<Navigate replace to="/login"/>} />
      </Routes>
    </Router>
  );
}

export default App;