import { Outlet, NavLink } from "react-router-dom"

export default function HostLayout() {
    return (
        <>
            <nav className="host-nav">
                <NavLink to='.' end className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                    Dashboard</NavLink>
                <NavLink to='income' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                    Income</NavLink>
                <NavLink to='vans' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                    Vans</NavLink>
                <NavLink to='reviews' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                    Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}