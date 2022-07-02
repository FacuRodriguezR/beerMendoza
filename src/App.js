
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className="header">
      <div>
        <a href="index.html"
          ><img
            src="./public/cerveza.png"
            alt="logo-parador"
            class="logo"
        /></a>
      </div>
      <input type="checkbox" id="check" />
      <label for="check" className="bar-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul class="nav-menu">
        <li><a href="pages/contactos.html">Contacto</a></li>
        <li><a href="pages/productos.html">Productos</a></li>
      </ul>
    </nav>
        
      </header>
    </div>
  );
}

export default App;
