import './App.css';
import Navbar from './components/Navbar';
import Showroom from './components/Showroom';
import CartProvider from './managers/CartProvider';
import MoviesProvider from './managers/MoviesProvider';

const App = () =>{
  return (
    <MoviesProvider>
      <CartProvider>
        <Navbar/>
        <main>
          <Showroom/>
        </main>
      </CartProvider>
      
    </MoviesProvider>
    
  );
}

export default App;
