import './index.css'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Outlet,
	RouterProvider,
} from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Tail from './components/shared/Tail'
import LandingPage from './pages/LandingPage'
import Membership from './pages/Membership'
import Locations from './pages/Locations'
import Facilities from './pages/Facilities'
import News from './pages/News'
import Contact from './pages/Contact'
import BookTour from './pages/BookTour'
import NotFound from './pages/NotFound'
import About from './pages/About'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path='/'
				element={<Root />}
			>
				<Route
					index
					element={<LandingPage />}
				/>
				<Route
					path='/memberships'
					element={<Membership />}
				/>
				<Route
					path='/locations'
					element={<Locations />}
				/>
				<Route
					path='/facilities'
					element={<Facilities />}
				/>
				<Route
					path='/blog'
					element={<News />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
				<Route
					path='/book-tour'
					element={<BookTour />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/not-found'
					element={<NotFound />}
				/>
				<Route
					path='/*'
					element={<NotFound />}
				/>
			</Route>
		)
	)

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export const Root = () => {
	return (
		<>
			<div className=''>
				<Navbar />
				<Outlet />
				<Tail />
			</div>
		</>
	)
}

export default App
