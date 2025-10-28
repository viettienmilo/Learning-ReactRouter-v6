import { Outlet } from "react-router-dom"

export default function Dashboard() {
    return (
        <>
            <h1 className="hostvans-container">Dashboard Page</h1>
            <Outlet />
        </>
    )
}