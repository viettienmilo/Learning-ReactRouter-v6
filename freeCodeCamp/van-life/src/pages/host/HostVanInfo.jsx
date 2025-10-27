import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
    const { van } = useOutletContext();

    return (
        <div className="body">
            <p><b>Name: </b>{van.name}</p>
            <p><b>Category: </b>{van.type}</p>
            <div><b>Description: </b>{van.description}</div>
            <p><b>Visibility: </b>Public</p>
        </div>

    );
}