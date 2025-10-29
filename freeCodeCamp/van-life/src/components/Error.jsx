import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();

    return (
        <div>
            <img src="../src/assets/error.svg" alt="error img" style={{ display: "block", marginTop: 50, marginLeft: "auto", marginRight: "auto" }} />
            <h3 style={{ textAlign: "center", marginTop: 100, fontSize: 17, letterSpacing: 2, textTransform: "uppercase", color: "#ff4f4fff" }}>{error.message}</h3>
            <p style={{ textAlign: "center", fontSize: 17, letterSpacing: 2, textTransform: "uppercase" }}>{error.status} - {error.statusText}</p>
        </div>
    );
}