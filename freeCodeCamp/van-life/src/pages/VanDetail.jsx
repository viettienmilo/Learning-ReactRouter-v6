import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners';

export default function VanDetail() {
    const { id } = useParams();
    const [van, setVan] = useState(null);

    useEffect(() => {
        fetch(`/api/vans/${id}/`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [id]);

    return (
        <div className='van-detail-container'>
            {
                van ?
                    <div className='van-detail'>
                        <img src={van.imageUrl} alt={van.name} />
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className='van-price'>${van.price}<span>/day</span></p>
                        <p>{van.description}</p>
                        <button className='link-button'>Rent this van</button>
                    </div>
                    : <div className='data-loading'><PacmanLoader color="#E17654" size={40} /></div>
            }
        </div>
    );
}