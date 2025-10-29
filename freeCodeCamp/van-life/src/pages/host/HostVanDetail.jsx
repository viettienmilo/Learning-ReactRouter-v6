import { Await, Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { PacmanLoader } from 'react-spinners';
import { getHostVans } from './../../api.js';
import { requireAuth } from './../../utils.js';

export async function loader({ params, request }) {
    await requireAuth(request);
    const { id } = params;
    return { van: getHostVans(id) };
}

export default function HostVanDetail() {
    const { van } = useLoaderData();

    return (
        <div className="hostvan-detail-container">
            <Suspense fallback={<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><PacmanLoader size={20} color="#ffa938ff" /></div>}>
                <Await resolve={van}>
                    {(loadedVan) => (
                        <>
                            <Link to=".." relative="path" className="link-back">&larr;  Back to all vans</Link>
                            <div className="hostvan-detail">
                                <div className="header">
                                    <img src={loadedVan.imageUrl} alt={loadedVan.name} />
                                    <div>
                                        <i className={`van-type-sm ${loadedVan.type} selected`}>{loadedVan.type}</i>
                                        <h2>{loadedVan.name}</h2>
                                        <p><b>${loadedVan.price}</b><span style={{ fontWeight: 400 }}>/day</span></p>
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
                                <Outlet context={{ van: loadedVan }} />
                            </div>
                        </>
                    )}
                </Await>
            </Suspense>
        </div>
    )
}
