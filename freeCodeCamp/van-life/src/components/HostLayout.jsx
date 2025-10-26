import { Outlet, NavLink } from "react-router-dom"

export default function HostLayout() {
    return (
        <>
            <nav className="host-nav">
                <NavLink to='/host' end className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                    Dashboard</NavLink>
                <NavLink to='/host/income' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                    Income</NavLink>
                <NavLink to='/host/vans' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                    Vans</NavLink>
                <NavLink to='/host/reviews' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                    Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}