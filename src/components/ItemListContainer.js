import '../App.css'

function ItemListContainer() {
    return (
        <div className="cards">
            <li>
                <p>Blond</p>
                <button>Agregar al carrito</button>
            </li>
            <li>
                <p>Amber</p>
                <button>Agregar al carrito</button>
            </li>
            <li>
                <p>IPA</p>
                <button>Agregar al carrito</button>
            </li>
            <li>
                <p>APA</p>
                <button>Agregar al carrito</button>
            </li>
            <li>
                <p>Stout</p>
                <button>Agregar al carrito</button>
            </li>

        </div>
    )
}

export default ItemListContainer;