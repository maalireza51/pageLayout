import { Link } from "react-router-dom"
import "./style.css"

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/" className='navbar__item'>Home</Link>
      <Link to="/blog" className='navbar__item'>Blog</Link>
      <Link to="/comment" className='navbar__item'>Comments</Link>
      <div className='navbar__title navbar__item'>PageLayout</div>
    </nav>
  )
}
