import { Link } from "react-router-dom"

export default function Home() {

    return (
        <div className="home-page">
            <div className="hero">
                <img src='src/assets/home-hero.png' alt='home-hero' />
                <div className="overlay">
                    <p className="main-text">You got the travel plans, we got the travel vans.</p>
                    <p className="sub-text">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <button type="button">Find your van</button>
                </div>
            </div>
        </div>
    )
}