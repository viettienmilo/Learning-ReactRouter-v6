import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import About from './pages/About.jsx';
import Home from './pages/Home.jsx';

export default function App() {

  return (
    <BrowserRouter>
      <div className='body-container'>
        <header>
          <nav>
            <Link to='/' className="brand-name">#VANLIFE</Link>
            <Link to='/about' className="menu-list">About</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>

        <footer>
          <p>© 2025 #VANLIFE</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

