import { AnimatePresence, motion } from 'framer-motion'

export default function Hero() {
	return (
		<div>
			<div className='bg-gradient-to-br from-[#92f0ce] via-white to-[#9294f0] w-full lg:py-32 md:py-24 sm:py-24'>
				<div className='lg:text-[84px] md:text-[40px] sm:text-[30px] font-extrabold text-black uppercase flex flex-col sm:pl-2 pl-7'>
					<AnimatePresence>
						<h2 className=''>
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
									News,
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.5 }}
									className='px-4 bg-white border-4 border-black sm:border-2'
								>
									Insights
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
									&
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: false }}
									animate={{ opacity: 1 }}
									mode='wait'
									transition={{ duration: 1, delay: 0.9 }}
									className='px-4 bg-white border-4 border-black sm:border-2'
								>
									Events.
								</motion.div>
							</div>
						</h2>
					</AnimatePresence>
				</div>
			</div>
		</div>
	)
}
