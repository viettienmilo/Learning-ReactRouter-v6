
import { Link, useLoaderData } from "react-router-dom";
import { PacmanLoader } from 'react-spinners';
import { getHostVans } from './../../api.js';
import { requireAuth } from './../../utils.js';

export async function loader({ request }) {
    await requireAuth(request);
    return getHostVans();
}

export default function HostVans() {
    const vans = useLoaderData();

    return (
        <div className="hostvans-container">
            <h1>Your listed vans</h1>
            {vans.map(van =>
                <Link to={van.id} className="hostvans-item" key={van.id}>
                    <img src={van.imageUrl} />
                    <div>
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </Link>
            )}
        </div>
    )
}