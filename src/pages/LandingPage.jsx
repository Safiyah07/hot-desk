import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Body from '../components/Body'
import Members from '../components/Members'
import DemandOptions from '../components/DemandOptions'

export default function LandingPage() {
	return (
		<>
			<div className=''>
				<Navbar />
				<Hero />
				<Slider />
				<Body />
				<Members />
				<DemandOptions />
			</div>
		</>
	)
}
