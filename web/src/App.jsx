// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom"
import Products from "./Products";
import Product from "./Product";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
