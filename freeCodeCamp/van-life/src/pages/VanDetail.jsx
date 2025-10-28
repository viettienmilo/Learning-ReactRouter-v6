import { Link, useLocation, useLoaderData } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners';
import { getVans } from './../api.js';

export async function loader({ params }) {
    const { id } = params;
    return getVans(id);
}

export default function VanDetail() {
    const van = useLoaderData();
    const { state: { search, type } } = useLocation();

    return (
        <div className='van-detail-container'>
            <Link to={`..${search ? `?${search}` : ''}`}
                relative='path'
                className="link-back">&larr;  Back to {type ? type : "all"} vans</Link>
            <div className='van-detail'>
                <img src={van.imageUrl} alt={van.name} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className='van-price'>${van.price}<span>/day</span></p>
                <p>{van.description}</p>
                <button className='link-button'>Rent this van</button>
            </div>
        </div>
    );
}
