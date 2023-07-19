import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
      <h1>Total-Fashion</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/categoria/2"> Hombres </NavLink>
          </li>

          <li>
           <NavLink to="/categoria/3"> Mujeres </NavLink> 
          </li>
          

        </ul>
      </nav>
      
      <CartWidget/>
      </header>
  )
}

export default NavBar
