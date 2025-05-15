import { Outlet } from "react-router"
import Navigation from "./Navigation"

const Layout = () => {
  return (
    <div>
      <div className="navbar">
        <Navigation />

      </div>
      <div className="contain">
      <Outlet />

      </div>
    </div>
  )
}
export default Layout