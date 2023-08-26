import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Section2 from '../../assets/location/section2.jpg'
import Section3 from '../../assets/location/section3.jpg'
import Section5 from '../../assets/location/section5.jpg'

export default function ImageSectionSlide() {
	const [ref, inView] = useInView({
		triggerOnce: false, // Only trigger the animation once
	})

	// useEffect(() => {
	// 	if (inView) {
	// 		// In view, trigger the animation
	// 	}
	// }, [inView])
	return (
		<>
			<div>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
					transition={{ duration: 1 }}
					className='flex w-1/2 gap-10 py-10 h-1/2'
				>
					<img
						src={Section2}
						alt=''
						className='w-[90%] border-4 border-black sm:border-2'
					/>
					<img
						src={Section5}
						alt=''
						className='w-[70%] border-4 border-black rounded-[50%] sm:border-2'
					/>
					<img
						src={Section3}
						alt=''
						className='w-[90%] border-4 border-black sm:border-2'
					/>
				</motion.div>
			</div>
		</>
	)
}
