import { motion, useScroll, useTransform } from 'framer-motion'
import Section2 from '../../assets/location/section2.jpg'
import Section3 from '../../assets/location/section3.jpg'
import Section5 from '../../assets/location/section5.jpg'

export default function ImageSectionSlide() {
	const { scrollYProgress } = useScroll()
	const x = useTransform(scrollYProgress, [0, 1], [-150, -1000])

	return (
		<>
			<div className='flex'>
				<motion.div
					style={{ x }}
					className='flex items-center gap-10 py-5'
				>
					<img
						src={Section2}
						alt=''
						className='w-full h-[65%] sm:h-[70%] border-4 border-black sm:border-2'
					/>
					<img
						src={Section5}
						alt=''
						className='w-[34%] md:w-[41%] sm:w-[45%] border-4 border-black rounded-[50%] sm:border-2'
					/>
					<img
						src={Section3}
						alt=''
						className='w-full h-[65%] sm:h-[70%] border-4 border-black sm:border-2'
					/>
					<img
						src={Section5}
						alt=''
						className='w-[34%] md:w-[41%] sm:w-[45%] border-4 border-black rounded-[50%] sm:border-2'
					/>
				</motion.div>
			</div>
		</>
	)
}
