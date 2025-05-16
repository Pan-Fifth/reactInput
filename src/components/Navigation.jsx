import { Link } from "react-router"

function Navigation() {
  return (
    <nav className="navbar">
      <Link to ='/' className="navbut">Form</Link>
      <p className="sep">|</p>
      <Link to ='/cart' className="navbut">Cart</Link>
      <p className="sep">|</p>
      <Link to ='/search' className="navbut">Search</Link>
      <p className="sep">|</p>
      <Link to ='/image' className="navbut">Image Carousel</Link>
      <p className="sep">|</p>
      <Link to ='/toggle' className="navbut">Toggle Theme</Link>
    </nav>

  )
}
export default Navigation