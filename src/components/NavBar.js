import '../App.css';
import CartWidget from './CartWidget';



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
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Productos</a></li>
        </ul>
        <CartWidget/>
      </nav>
          
        </header>
      </div>
    );
  }
  
  export default Nav;