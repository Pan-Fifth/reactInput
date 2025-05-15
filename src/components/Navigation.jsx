import { Link } from "react-router"

function Navigation() {
  return (
    <nav style={{margin:'30px',display:"flex", gap:"20px"}}>
      <Link to ='/' style={{color:"black"}}>Form</Link>
      <Link to ='/cart' style={{color:"black"}}>Cart</Link>
      <Link to ='/search' style={{color:"black"}}>Search</Link>
      <Link to ='/image' style={{color:"black"}}>Image</Link>
      <Link to ='/toggle' style={{color:"black"}}>Toggle</Link>
    </nav>
  )
}
export default Navigation