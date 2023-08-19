import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Body from './components/Body'
import Members from './components/Members'
import DemandOptions from './components/DemandOptions'
import Companies from './components/Companies'
import ImageSlider from './components/ImageSlider'
import GetInTouch from './components/GetInTouch'
import Requirements from './components/Requirements'
import Tail from './components/Tail'

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Slider />
			<Body />
      <Members />
			<DemandOptions />
      <Companies />
      <ImageSlider />
      <GetInTouch />
			<Requirements />
			<Tail />
		</>
	)
}

export default App
