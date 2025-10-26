import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { PacmanLoader } from 'react-spinners';

export default function HostVanDetail() {
    const { id } = useParams();
    const [van, setVan] = useState(null);

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]));
    }, [id])

    return (
        <div className="hostvan-detail-container">
            <Link to=".." relative="path" className="link-back">&larr;  Back to all vans</Link>
            {van ?
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
                    <Outlet />
                </div>
                : <div className='data-loading'><PacmanLoader color="#E17654" size={40} /></div>
            }
        </div>
    )
}
