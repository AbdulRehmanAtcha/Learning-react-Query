import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Users from './Users';
import Home from './Home';
import Add from './Add';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/all"}>
            All Users
          </Link>
        </li>
        <li>
          <Link to={"/add"}>
            Add User
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all' element={<Users/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </div>
  );
}

export default App;
