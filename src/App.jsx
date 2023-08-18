import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Body from './components/Body'
import Members from './components/Members'
import DemandOptions from './components/DemandOptions'
import Companies from './components/Companies'
import ImageSlider from './components/ImageSlider'

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
		</>
	)
}

export default App
