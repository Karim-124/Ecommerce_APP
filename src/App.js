import logo from './logo.svg';
import './App.css';
import AppNavbar from './component/AppNavbar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Products from './component/Products';
import ProductDetails from './component/ProductDetails';
import Cart from './component/Cart';


function App() {


  return (
    <div className="App"> 
    <AppNavbar/>
    <Routes>
      <Route path='/' element={<>
        <Home/>
        <Products/>
      </>}/>
     <Route path='products/:productID' element={<ProductDetails/>}/>
     <Route path='/products' element={<Products/>}/>
     <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </div>
  );
}

export default App;
  