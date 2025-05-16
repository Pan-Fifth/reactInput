import { Link } from "react-router"

function Navigation() {
  return (
    <nav className="navbar">
      <Link to ='/' style={{color:"white"}}>Form</Link>
      <Link to ='/cart' style={{color:"white"}}>Cart</Link>
      <Link to ='/search' style={{color:"white"}}>Search</Link>
      <Link to ='/image' style={{color:"white"}}>Image Carousel</Link>
      <Link to ='/toggle' style={{color:"white"}}>Toggle Theme</Link>
    </nav>

  )
}
export default Navigation