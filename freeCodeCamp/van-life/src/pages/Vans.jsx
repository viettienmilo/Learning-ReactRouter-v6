import { Link, useSearchParams, useLoaderData, Await } from 'react-router-dom';
import { getVans } from './../api.js';
import { Suspense } from 'react';
import { PacmanLoader } from 'react-spinners';

export function loader() {
    return { vans: getVans() };
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { vans } = useLoaderData();

    const typeFilter = searchParams.get("type");

    function handleFilterChanged(key, value) {
        setSearchParams(prevParams => {
            if (value === null) prevParams.delete(key);
            else prevParams.set(key, value);
            return prevParams;
        })
    }

    return (
        <div className='van-list-container'>
            <p>Explore our van options</p>
            <Suspense fallback={<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><PacmanLoader size={20} color="#ffa938ff" /></div>}>
                <Await resolve={vans}>
                    {(loadedVans) => (
                        <>
                            <div className='van-filter'>
                                <button onClick={() => handleFilterChanged("type", "simple")} className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`}>Simple</button>
                                <button onClick={() => handleFilterChanged("type", "luxury")} className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}>Luxury</button>
                                <button onClick={() => handleFilterChanged("type", "rugged")} className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}>Rugged</button>
                                {typeFilter && <button onClick={() => handleFilterChanged("type", null)} className='van-type clear-filters'>Clear Filter</button>}
                            </div>
                            <div className='van-list'>
                                {loadedVans.filter(van => !typeFilter || van.type.includes(typeFilter))
                                    .map(van =>
                                        <div className='van-tile' key={van.id}>
                                            <Link to={van.id} state={{ search: searchParams.toString(), type: typeFilter }}>
                                                <img src={van.imageUrl} alt={van.name} />
                                                <div className='van-info'>
                                                    <h3>{van.name}</h3>
                                                    <p>${van.price}<span>/day</span></p>
                                                </div>
                                                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                                            </Link>
                                        </div>
                                    )}
                            </div>
                        </>
                    )}
                </Await>
            </Suspense>
        </div>
    )
}