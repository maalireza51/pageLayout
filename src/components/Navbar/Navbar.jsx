import { NavLink } from "react-router-dom"
import "./style.css"

export default function Navbar() {

  let activeClassName = "navbar__item navbar__item--selected";

  return (
    <nav className='navbar'>
      <NavLink to="/" className={
        ({ isActive }) =>
          isActive ? activeClassName : "navbar__item"}
      >
        Home
      </NavLink>

      <NavLink to="/blog" className={
        ({ isActive }) =>
          isActive ? activeClassName : "navbar__item"}
      >
        Blog
      </NavLink>

      <NavLink to="/comment" className={
        ({ isActive }) =>
          isActive ? activeClassName : "navbar__item"}
      >
        Comments
      </NavLink>

      <div className='navbar__title navbar__item'>PageLayout</div>
    </nav>
  )
}
