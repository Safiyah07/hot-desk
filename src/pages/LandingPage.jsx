import Hero from '../components/landing/Hero'
import Slider from '../components/landing/Slider'
import Body from '../components/landing/Body'
import Members from '../components/landing/Members'
import DemandOptions from '../components/landing/DemandOptions'
import Companies from '../components/landing/Companies'
import { ImageSlider } from '../components/landing/ImageSlider'
import GetInTouch from '../components/shared/GetInTouch'
import Requirements from '../components/landing/Requirements'
import Body2 from '../components/landing/Body2'

export default function LandingPage() {
	return (
		<>
			<div className=''>
				<Hero />
				<Slider />
				<Body />
				<Body2 />
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
