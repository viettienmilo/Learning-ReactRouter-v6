import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const { van } = useOutletContext();

    return (
        <div className="body">
            <p><span style={{ fontSize: 24 }}>${van.price.toFixed(2)}</span>/day</p>
        </div>
    );
}