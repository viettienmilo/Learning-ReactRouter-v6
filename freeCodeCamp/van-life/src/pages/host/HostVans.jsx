import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
    const [vans, setVans] = useState([]);
    useEffect(() => {
        const cached = localStorage.getItem("hostvans");
        if (cached) setVans(JSON.parse(cached));
        else {
            fetch("/api/host/vans")
                .then(res => res.json())
                .then(data => {
                    setVans(data.vans);
                    localStorage.setItem("hostvans", JSON.stringify(data.vans));
                })
        }
    }, [])

    return (
        <div className="hostvans-container">
            <h1>Your listed vans</h1>
            {vans.map(van =>
                <Link to={`/host/vans/${van.id}`} className="hostvans-item" key={van.id}>
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