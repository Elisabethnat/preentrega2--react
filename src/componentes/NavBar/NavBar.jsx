import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <h1>Total-Fashion</h1>
      <nav>
        <ul>
          <li>Hombres</li>
          <li>Mujeres</li>
          <li>Niños</li>
        </ul>
      </nav>
      
      <CartWidget/>
      </header>
  )
}

export default NavBar;
