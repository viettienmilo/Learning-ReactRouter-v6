import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <nav>
                <Link to='/' className="brand-name">#VANLIFE</Link>
                <div>
                    <Link to='/about' className="menu-list">About</Link>
                    <Link to='/vans' className="menu-list">Vans</Link>
                </div>
            </nav>
        </header>
    )
}