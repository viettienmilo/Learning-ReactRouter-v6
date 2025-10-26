import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

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
            {van ?
                <div>
                    <h1>{van.name}</h1>
                </div>


                : <h1>Loading</h1>
            }
        </div>
    )
}