import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Vans from './pages/Vans.jsx';
import VanDetail from './pages/VanDetail.jsx';
import "./server.js"
import Layout from './components/Layout.jsx';

export default function App() {

  return (
    <BrowserRouter>
      <div className='body-container'>
        <main>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/vans' element={<Vans />} />
              <Route path='/vans/:id' element={<VanDetail />} />
            </Route>
          </Routes>
        </main>

        <footer>
          <p>© 2025 #VANLIFE</p>
        </footer>
      </div>
    </BrowserRouter >
  )
}

