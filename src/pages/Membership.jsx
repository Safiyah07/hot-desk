import Companies from '../components/landing/Companies'
import Hero from '../components/membership/Hero'
import SoloMembership from '../components/membership/SoloMembership'
import TeamMembership from '../components/membership/TeamMembership'
import { Testimonials } from '../components/membership/Testimonials'

export default function Membership() {
	return (
		<>
			<Hero />
			<SoloMembership />
			<TeamMembership />
			<Testimonials />
			<Companies />
		</>
	)
}
