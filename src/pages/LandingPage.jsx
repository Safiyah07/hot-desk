import Navbar from '../components/shared/Navbar'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Body from '../components/Body'
import Members from '../components/Members'

export default function LandingPage() {
	return (
		<>
			<div className=''>
				<Navbar />
        <Hero />
        <Slider />
				<Body />
				<Members />
			</div>
		</>
	)
}
