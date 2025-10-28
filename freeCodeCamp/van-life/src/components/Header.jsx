import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav className="nav-main">
            <NavLink to='/' className="brand-name">#VANLIFE</NavLink>
            <div className="navlink-item">
                <NavLink to='/host' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                    Host</NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                    About</NavLink>
                <NavLink to='/vans' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                    Vans</NavLink>
                <NavLink to='/login' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                    <img src="/src/assets/avatar-icon.png" alt="avatar icon" width={20} /></NavLink>
            </div>
        </nav>

    )
}