import { motion } from 'framer-motion'
import Section2 from '../../assets/location/section2.jpg'
import Section3 from '../../assets/location/section3.jpg'
import Section5 from '../../assets/location/section5.jpg'

export default function ImageSectionSlide() {
	return (
		<>
			<div>
				<motion.div
					initial={{ opacity: 0 }}
					viewport={{ once: false }}
					animate={{ opacity: 1 }}
					mode='wait'
					transition={{
						duration: 0.8,
						delay: 0.3,
						ease: [0, 0.71, 0.2, 1.01],
					}}
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
