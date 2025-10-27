import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Vans, { loader as vansLoader } from './pages/Vans.jsx';
import VanDetail from './pages/VanDetail.jsx';
import "./server.js"
import Layout from './components/Layout.jsx';
import HostLayout from './components/HostLayout.jsx';
import Dashboard from './pages/host/Dashboard.jsx';
import Income from './pages/host/Income.jsx';
import Reviews from './pages/host/Reviews.jsx';
import HostVans from './pages/host/HostVans.jsx';
import HostVanDetail from './pages/host/HostVanDetail.jsx';
import HostVanInfo from './pages/host/HostVanInfo.jsx';
import HostVanPricing from './pages/host/HostVanPricing.jsx';
import HostVanPhotos from './pages/host/HostVanPhotos.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import Error from './components/Error.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='vans' element={<Vans />} errorElement={<Error />} loader={vansLoader} />
    <Route path='vans/:id' element={<VanDetail />} />
    <Route path='host' element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='income' element={<Income />} />
      <Route path='vans' element={<HostVans />} />
      <Route path='vans/:id' element={<HostVanDetail />}>
        <Route index element={<HostVanInfo />} />
        <Route path='pricing' element={<HostVanPricing />} />
        <Route path='photos' element={<HostVanPhotos />} />
      </Route>
      <Route path='reviews' element={<Reviews />} />
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={router} className='body-container' />
  )
}

