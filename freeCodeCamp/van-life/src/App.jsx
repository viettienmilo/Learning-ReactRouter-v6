import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Vans, { loader as vansLoader } from './pages/Vans.jsx';
import VanDetail, { loader as vanDetailLoader } from './pages/VanDetail.jsx';
import "./server.js"
import Layout from './components/Layout.jsx';
import HostLayout from './components/HostLayout.jsx';
import Dashboard from './pages/host/Dashboard.jsx';
import Income from './pages/host/Income.jsx';
import Reviews from './pages/host/Reviews.jsx';
import HostVans, { loader as hostVansLoader } from './pages/host/HostVans.jsx';
import HostVanDetail, { loader as hostVanDetailLoader } from './pages/host/HostVanDetail.jsx';
import HostVanInfo from './pages/host/HostVanInfo.jsx';
import HostVanPricing from './pages/host/HostVanPricing.jsx';
import HostVanPhotos from './pages/host/HostVanPhotos.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import Error from './components/Error.jsx';
import Login, { loader as loginLoader, action as loginAction } from './pages/Login.jsx';
import { requireAuth } from './utils.js';

localStorage.removeItem("loggedin")
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='vans' element={<Vans />} errorElement={<Error />} loader={vansLoader} />
    <Route path='vans/:id' element={<VanDetail />} loader={vanDetailLoader} />
    <Route path='host' element={<HostLayout />}>
      <Route index loader={async ({ request }) => await requireAuth(request)} element={<Dashboard />} />
      <Route path='income' loader={async ({ request }) => await requireAuth(request)} element={<Income />} />
      <Route path='vans' loader={hostVansLoader} element={<HostVans />} />
      <Route path='vans/:id' loader={hostVanDetailLoader} element={<HostVanDetail />}>
        <Route index loader={async ({ request }) => await requireAuth(request)} element={<HostVanInfo />} />
        <Route path='pricing' loader={async ({ request }) => await requireAuth(request)} element={<HostVanPricing />} />
        <Route path='photos' loader={async ({ request }) => await requireAuth(request)} element={<HostVanPhotos />} />
      </Route>
      <Route path='reviews' element={<Reviews />} loader={async ({ request }) => await requireAuth(request)} />
    </Route>
    <Route path='login' element={<Login />} loader={loginLoader} action={loginAction} />
    <Route path="*" element={<PageNotFound />} />
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={router} className='body-container' />
  )
}

