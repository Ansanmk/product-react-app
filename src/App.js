import logo from './logo.svg';
import './App.css';
import ProductDetails from './components/ProductDetails';
import ProductSearch from './components/ProductSearch';
import ProductCart from './components/ProductCart';

function App() {
  return (
    <div>
      <ProductDetails />
      <ProductSearch />
      <ProductCart />
    </div>
  );
}

export default App;
