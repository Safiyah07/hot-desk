import Hero from '../components/landing/Hero'
import Slider from '../components/landing/Slider'
import Body from '../components/landing/Body'
import Members from '../components/landing/Members'
import DemandOptions from '../components/landing/DemandOptions'
import Companies from '../components/landing/Companies'
import { ImageSlider } from '../components/landing/ImageSlider'
import GetInTouch from '../components/shared/GetInTouch'
import Requirements from '../components/landing/Requirements'

export default function LandingPage() {
	return (
		<>
			<div className=''>
				<Hero />
				<Slider />
				<Body />
				<Members />
				<DemandOptions />
				<Companies />
				<ImageSlider />
				<GetInTouch />
				<Requirements />
			</div>
		</>
	)
}
