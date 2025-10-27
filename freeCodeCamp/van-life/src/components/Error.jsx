// import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();

    return (
        <div >
            <img src="../src/assets/error.svg" alt="error img" style={{ display: "block", marginTop: 50, marginLeft: "auto", marginRight: "auto" }} />
            <h3 style={{ textAlign: "center", marginTop: 100, fontSize: 17, letterSpacing: 2, textTransform: "uppercase" }}>{error.message}</h3>
            <p style={{ textAlign: "center", fontSize: 17, letterSpacing: 2, textTransform: "uppercase" }}>{error.status} - {error.statusText}</p>
            {/* <Link
                style={{
                    backgroundColor: "#FB8133",
                    color: "white",
                    fontSize: 12,
                    fontWeight: 200,
                    letterSpacing: 1,
                    width: 190,
                    height: 40,
                    border: "none",
                    borderRadius: 20,
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    cursor: "pointer",
                    textAlign: "center",
                    alignContent: "center",
                    textDecoration: "none",
                }}
                to={"/"}
            >
                BACK TO HOME</Link> */}
        </div>
    );
}