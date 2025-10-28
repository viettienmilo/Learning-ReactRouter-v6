import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { PacmanLoader } from 'react-spinners';
import { getHostVans } from './../../api.js';
import { requireAuth } from './../../utils.js';

export async function loader({ params, request }) {
    await requireAuth(request);
    const { id } = params;
    return getHostVans(id);
}

export default function HostVanDetail() {
    const van = useLoaderData();

    return (
        <div className="hostvan-detail-container">
            <Link to=".." relative="path" className="link-back">&larr;  Back to all vans</Link>
            <div className="hostvan-detail">
                <div className="header">
                    <img src={van.imageUrl} alt={van.name} />
                    <div>
                        <i className={`van-type-sm ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p><b>${van.price}</b><span style={{ fontWeight: 400 }}>/day</span></p>
                    </div>
                </div>
                <nav className="host-van-nav">
                    <NavLink to='.' end className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                        Details</NavLink>
                    <NavLink to='pricing' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                        Pricing</NavLink>
                    <NavLink to='photos' className={({ isActive }) => isActive ? "navlink-item-active" : null}>
                        Photos</NavLink>
                </nav>
                <Outlet context={{ van }} />
            </div>
        </div>
    )
}
