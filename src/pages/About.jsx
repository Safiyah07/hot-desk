import FirstCeoSection from '../components/about/FirstCeoSection'
import Hero from '../components/about/Hero'
import HotdeskNumbers from '../components/about/HotdeskNumbers'
import SecondCeoSection from '../components/about/SecondCeoSection'
import CompaniesFooter from '../components/shared/CompaniesFooter'

export default function About() {
  return (
    <div>
      <Hero />
      <HotdeskNumbers />
      <FirstCeoSection />
      <SecondCeoSection />
      <CompaniesFooter />
    </div>
  )
}
