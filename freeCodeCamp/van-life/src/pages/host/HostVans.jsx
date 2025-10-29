
import { Link, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import { PacmanLoader } from 'react-spinners';
import { getHostVans } from './../../api.js';
import { requireAuth } from './../../utils.js';

export async function loader({ request }) {
    await requireAuth(request);
    return { vans: getHostVans() };
}

export default function HostVans() {
    const { vans } = useLoaderData();

    return (
        <div className="hostvans-container">
            <h1>Your listed vans</h1>
            <Suspense fallback={<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><PacmanLoader size={20} color="#ffa938ff" /></div>}>
                <Await resolve={vans}>
                    {(loadedVans) => (
                        loadedVans.map(van =>
                            <Link to={van.id} className="hostvans-item" key={van.id}>
                                <img src={van.imageUrl} />
                                <div>
                                    <h3>{van.name}</h3>
                                    <p>${van.price}/day</p>
                                </div>
                            </Link>
                        )
                    )}
                </Await>
            </Suspense>
        </div>
    )
}