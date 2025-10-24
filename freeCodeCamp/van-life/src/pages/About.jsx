import { Link } from "react-router-dom"

export default function About() {

    return (
        <div className="about-page">
            <div className="about-body">
                <img src="src\assets\about-hero.png" alt="about-hero" />
                <div className="about-body-text">
                    <div className="title">Don’t squeeze in a sedan when you could relax in a van.</div>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                        (Hitch costs extra 😉)</p>
                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
            </div>
            <div className="van-explore">
                <p>Your destination is waiting. Your van is ready.</p>
                <button>Explore our vans</button>
            </div>
        </div>
    )
}