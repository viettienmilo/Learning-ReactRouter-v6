import { Outlet } from "react-router-dom"

export default function Dashboard() {
    return (
        <>
            <h1>Dashboard Page</h1>
            <Outlet />
        </>
    )
}