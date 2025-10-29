import { Link, useLocation, useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';
import { getVans } from './../api.js';
import { PacmanLoader } from 'react-spinners';

export async function loader({ params }) {
    const { id } = params;
    return { van: getVans(id) };
}

export default function VanDetail() {
    const { van } = useLoaderData();
    const { state: { search, type } } = useLocation();

    return (
        <div className='van-detail-container'>
            <Suspense fallback={<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><PacmanLoader size={20} color="#ffa938ff" /></div>}>
                <Await resolve={van}>
                    {(loadedVan) => (
                        <>
                            <Link to={`..${search ? `?${search}` : ''}`}
                                relative='path'
                                className="link-back">&larr;  Back to {type ? type : "all"} vans</Link>
                            <div className='van-detail'>
                                <img src={loadedVan.imageUrl} alt={loadedVan.name} />
                                <i className={`van-type ${loadedVan.type} selected`}>{van.type}</i>
                                <h2>{loadedVan.name}</h2>
                                <p className='van-price'>${loadedVan.price}<span>/day</span></p>
                                <p>{loadedVan.description}</p>
                                <button className='link-button'>Rent this van</button>
                            </div>
                        </>
                    )}
                </Await>
            </Suspense>
        </div>
    );
}
