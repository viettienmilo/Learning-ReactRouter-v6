import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Vans() {

    const [vans, setVans] = useState([]);
    useEffect(() => {
        const cached = localStorage.getItem("vans");
        if (cached) {
            setVans(JSON.parse(cached));
        }
        else {
            fetch("/api/vans")
                .then(res => res.json())
                .then(data => {
                    setVans(data.vans);
                    localStorage.setItem("vans", JSON.stringify(data.vans));
                })
        }
    }, []);

    return (
        <div className='van-list-container'>
            <p>Explore our van options</p>
            <div className='van-filter'>
                <button>Simple</button>
                <button>Luxury</button>
                <button>Rugged</button>
                <a>Clear Filter</a>
            </div>
            <div className='van-list'>
                {vans.map(van =>
                (<Link to={`/vans/${van.id}`} key={van.id} className='van-tile'>
                    <img src={van.imageUrl} alt={van.name} />
                    <div className='van-info'>
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>)
                )}
            </div>
        </div>
    )
}