import { motion } from 'framer-motion'
import ImageSectionSlide from './ImageSectionSlide'

export default function Hero() {
	return (
		<>
			<div className='bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#c7f092] via-[#f5f5f5] to-[#92f0ce] sm:bg-gradient-to-br sm:from-[#92f0ce] sm:via-[#fff] sm:to-[#9492f0] sm:to-90% w-full lg:py-24 md:py-16 sm:pt-24 overflow-hidden'>
				<div className='flex flex-col font-black text-black sm:pl-2 pl-7'>
					<h2 className='lg:text-[84px] md:text-[40px] sm:text-[23px] uppercase'>
						<div className='flex gap-3 pb-3 lg:items-center lg:'>
							<motion.div
								className='px-4 bg-white border-4 border-black sm:border-2'
								initial={{ opacity: 0 }}
								viewport={{ once: false }}
								animate={{ opacity: 1 }}
								mode='wait'
								transition={{
									duration: 0.8,
									delay: 0.3,
									ease: [0, 0.71, 0.2, 1.01],
								}}
							>
								We
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								viewport={{ once: false }}
								animate={{ opacity: 1 }}
								mode='wait'
								transition={{ duration: 1, delay: 0.5 }}
								className='px-4 bg-white border-4 border-black sm:border-2'
							>
								Created
							</motion.div>
						</div>

						<div className='flex gap-3 pb-3'>
							<motion.div
								initial={{ opacity: 0 }}
								viewport={{ once: false }}
								animate={{ opacity: 1 }}
								mode='wait'
								transition={{ duration: 1, delay: 0.7 }}
								className='px-4 bg-white border-4 border-black sm:border-2'
							>
								Hotdesk
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								viewport={{ once: false }}
								animate={{ opacity: 1 }}
								mode='wait'
								transition={{ duration: 1, delay: 0.9 }}
								className='px-4 bg-white border-4 border-black sm:border-2'
							>
								For You
							</motion.div>
						</div>
					</h2>
					<motion.div
						initial={{ opacity: 0 }}
						viewport={{ once: false }}
						animate={{ opacity: 1 }}
						mode='wait'
						transition={{ duration: 1, delay: 1 }}
						className='lg:text-[40px] md:text-[23px] sm:text-[18px] lg:w-1/2 md:w-[90%]'
					>
						A space for creatives to work together and create amazing things.
					</motion.div>
				</div>
					<ImageSectionSlide />
			</div>
		</>
	)
}
