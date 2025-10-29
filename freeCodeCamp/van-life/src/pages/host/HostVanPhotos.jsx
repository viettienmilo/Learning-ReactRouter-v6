import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const { van } = useOutletContext();
    if (!van) return null;

    return (
        <div className="body">
            <img src={van.imageUrl} width={150} style={{ borderRadius: 5 }} />
        </div>
    );
}