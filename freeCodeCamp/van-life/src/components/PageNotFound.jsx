import { Link } from "react-router-dom";
export default function PageNotFound() {

    return (
        <div >
            <img src="../src/assets/404.svg" alt="img404" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
            <h3 style={{ textAlign: "center", marginTop: 100, fontSize: 17, letterSpacing: 4 }}>OOPS! PAGE NOT FOUND</h3>
            <Link
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
                BACK TO HOME</Link>
        </div>
    );
}