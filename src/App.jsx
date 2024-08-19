import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './Components/Appbar/Appbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Track from './Pages/Track';
import Merchandise from './Pages/Merchandise';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import AppProvider from './Services/Context/AppProvider';
import Store from './Pages/Store';
import ProductDetails from './Components/Product/ProductDetails';
import Wishlist from './Pages/Wishlist';
import Cart from './Pages/Cart';
import Checkouts from './Components/Cart/Checkouts';

function App() {
  return (
    <div className="App">
      <Router>
        <AppProvider>
          <Appbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/merchandise' element={<Merchandise />} />
            <Route path='/product' element={<Product />} />
            <Route path='/location' element={<Store />}/>
            <Route path='/track' element={<Track />} />
            <Route path='product-details/:product_title' element={<ProductDetails />}/>
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkouts />}/>
          </Routes>
          <Footer />
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
