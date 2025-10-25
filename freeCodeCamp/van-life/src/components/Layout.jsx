import { Outlet } from "react-router-dom";
import Header from './Header.jsx';
export default function Layout() {
    return (
        <div className="body-container">
            <Header />
            <Outlet />
        </div>
    )
}