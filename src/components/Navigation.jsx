import { Link, NavLink } from "react-router"

function Navigation() {
  return (
    <nav className="navbar">
      <NavLink to ='/' className="navbut">Form</NavLink>
      <p className="sep">|</p>
      <NavLink to ='/cart' className="navbut">Cart</NavLink>
      <p className="sep">|</p>
      <NavLink to ='/search' className="navbut">Search</NavLink>
      <p className="sep">|</p>
      <NavLink to ='/image' className="navbut">Image Carousel</NavLink>
      <p className="sep">|</p>
      <NavLink to ='/toggle' className="navbut">Toggle Theme</NavLink>
    </nav>

  )
}
export default Navigation