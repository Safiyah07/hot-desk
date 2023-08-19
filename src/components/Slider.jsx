// import { useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function Slider() {
	const marqueeRef = useRef(null)

	useEffect(() => {
		const marqueeContent = marqueeRef.current
		const marqueeContainer = marqueeContent.parentNode

		const contentWidth = marqueeContent.offsetWidth
		const containerWidth = marqueeContainer.offsetWidth

		const offset = 220 // Adjust this value as needed
		const animationDuration = (contentWidth + offset) / 90 // Adjust as needed

		gsap.set(marqueeContent, { x: containerWidth + offset }) // Initial position

		const animation = gsap.to(marqueeContent, {
			x: -contentWidth,
			duration: animationDuration,
			repeat: -1, // Infinite loop
			ease: 'none',
		})

		return () => {
			animation.kill() // Clean up animation on unmount
		}
	}, [])

	return (
		<>
			<div className='w-full text-white bg-black lg:py-40 md:py-16 sm:py-12 lg:text-5xl md:text-3xl sm:text-xl'>
				<div
					ref={marqueeRef}
					className='flex gap-10 pb-16 overflow-hidden font-extrabold tracking-wider uppercase scroll-text sm:text-center'
				>
					<span>Hawthorn</span>
					<span>Richmond</span>
					<span>SouthYarra</span>
					<span className='flex items-center gap-3'>
						Winsor <h2 className='p-5 text-xl badge badge-white'>new!</h2>
					</span>
				</div>

				<p className='flex justify-center px-4 font-bold text-center'>
					New creative co-working spaces opening in 2023.
				</p>
			</div>
		</>
	)
}
