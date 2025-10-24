import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Vans from './pages/Vans.jsx';
import VanDetail from './pages/VanDetail.jsx';
import "./server.js"

export default function App() {

  return (
    <BrowserRouter>
      <div className='body-container'>
        <header>
          <nav>
            <Link to='/' className="brand-name">#VANLIFE</Link>
            <div>
              <Link to='/about' className="menu-list">About</Link>
              <Link to='/vans' className="menu-list">Vans</Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/vans' element={<Vans />} />
            <Route path='/vans/:id' element={<VanDetail />} />
          </Routes>
        </main>

        <footer>
          <p>© 2025 #VANLIFE</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

