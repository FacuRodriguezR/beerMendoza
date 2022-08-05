import '../App.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';



function Nav() {
    return (
      <div className="App">
        <header className="App-header">
        <nav className="header">
        <div className='logo'>
          <a href="#"
            >Mendoza Beer</a>
        </div>
        <input type="checkbox" id="check" />
        <label for="check" className="bar-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul class="nav-menu">
          <Link className='linked' to="/">Home</Link>
          <Link className='linked' to="/category/vinos">Vinos</Link>
          <Link className='linked' to="/category/cerveza">Cervezas</Link>
          <Link className='linked' to="/category/gin">Gin Tonic</Link>
        </ul>
      </nav>
      <Link to="/cart"><CartWidget/></Link>
      
     
      
        </header>
      </div>
    );
  }
  
  export default Nav;