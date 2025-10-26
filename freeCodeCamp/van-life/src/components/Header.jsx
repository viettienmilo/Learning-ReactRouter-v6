import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <nav className="nav-main">
                <NavLink to='/' className="brand-name">#VANLIFE</NavLink>
                <div className="navlink-item">
                    <NavLink to='/host' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                        Host</NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                        About</NavLink>
                    <NavLink to='/vans' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                        Vans</NavLink>
                </div>
            </nav>
        </header>
    )
}